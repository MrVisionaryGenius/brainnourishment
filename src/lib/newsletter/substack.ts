export interface SubstackResult {
  success: boolean;
  message: string;
  statusCode?: number;
}

const SUBSTACK_PUBLICATION = "theoperatorai";
const SUBSTACK_BASE_URL = `https://${SUBSTACK_PUBLICATION}.substack.com`;

export function randomDelay(minMs: number, maxMs: number): Promise<void> {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function subscribeToSubstack(
  email: string,
): Promise<SubstackResult> {
  try {
    await randomDelay(2000, 5000);

    // These exact headers are required — Substack checks all of them
    // Missing user-agent or origin = silent failure (no welcome email sent)
    const response = await fetch(`${SUBSTACK_BASE_URL}/api/v1/free`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.9",
        // Origin is critical — Substack rejects requests without it
        Origin: SUBSTACK_BASE_URL,
        // Referer must be the embed page specifically
        Referer: `${SUBSTACK_BASE_URL}/embed`,
        // User-agent is required for welcome email to be sent
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "X-Requested-With": "XMLHttpRequest",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
      },
      body: JSON.stringify({
        email,
        first_url: SUBSTACK_BASE_URL,
        first_referrer: "",
        current_url: `${SUBSTACK_BASE_URL}/embed`,
        current_referrer: "",
        referral_code: null,
        source: "embed",
      }),
    });

    const statusCode = response.status;

    if (statusCode === 200) {
      return {
        success: true,
        message: `Successfully subscribed ${email}`,
        statusCode,
      };
    }

    if (statusCode === 400) {
      let body: { error?: string } = {};
      try {
        body = await response.json();
      } catch {
        /* ignore */
      }
      const errorMsg = body?.error ?? "Bad request";

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

      return { success: false, message: `Invalid: ${errorMsg}`, statusCode };
    }

    if (statusCode === 429) {
      return { success: false, message: "Rate limited", statusCode };
    }

    return {
      success: false,
      message: `Unexpected status ${statusCode}`,
      statusCode,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Network error";
    return { success: false, message: `Error: ${message}` };
  }
}
