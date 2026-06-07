// Substack subscription via direct HTTP POST
// This mimics what the Substack embed form does internally

export interface SubstackResult {
  success: boolean;
  message: string;
  statusCode?: number;
}

const SUBSTACK_PUBLICATION = "theoperatorai";
const SUBSTACK_BASE_URL = `https://${SUBSTACK_PUBLICATION}.substack.com`;

// Random delay between min and max milliseconds
export function randomDelay(minMs: number, maxMs: number): Promise<void> {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function subscribeToSubstack(
  email: string,
): Promise<SubstackResult> {
  try {
    // Step 1: Small random delay to mimic human behavior (1–4 seconds)
    await randomDelay(1000, 4000);

    // Step 2: POST to Substack's subscription endpoint
    // This is the same endpoint used by the embedded subscribe form
    const response = await fetch(`${SUBSTACK_BASE_URL}/api/v1/free`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: SUBSTACK_BASE_URL,
        Referer: `${SUBSTACK_BASE_URL}/embed`,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify({
        email,
        // Tells Substack to NOT redirect to pledge page
        // just complete the free subscription
        first_url: SUBSTACK_BASE_URL,
        first_referrer: "",
        current_url: `${SUBSTACK_BASE_URL}/embed`,
        current_referrer: "",
        referral_code: null,
        source: "embed",
      }),
    });

    const statusCode = response.status;

    // 200 = success
    if (statusCode === 200) {
      return {
        success: true,
        message: `Successfully subscribed ${email}`,
        statusCode,
      };
    }

    // 400 = already subscribed or invalid email
    if (statusCode === 400) {
      let body: { error?: string } = {};
      try {
        body = await response.json();
      } catch {
        // ignore parse error
      }
      const errorMsg = body?.error ?? "Bad request";

      // If already subscribed, treat as success (idempotent)
      if (
        errorMsg.toLowerCase().includes("already") ||
        errorMsg.toLowerCase().includes("subscribed")
      ) {
        return {
          success: true,
          message: `Already subscribed: ${email}`,
          statusCode,
        };
      }

      return {
        success: false,
        message: `Invalid email or bad request: ${errorMsg}`,
        statusCode,
      };
    }

    // 429 = rate limited
    if (statusCode === 429) {
      return {
        success: false,
        message: "Rate limited by Substack — will retry",
        statusCode,
      };
    }

    return {
      success: false,
      message: `Unexpected status ${statusCode}`,
      statusCode,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown network error";
    return {
      success: false,
      message: `Network error: ${message}`,
    };
  }
}
