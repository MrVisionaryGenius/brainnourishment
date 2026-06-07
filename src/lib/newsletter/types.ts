export type EmailStatus = "pending" | "subscribed" | "failed" | "duplicate";
export type AutomationStatus = "running" | "paused" | "completed";

export interface NewsletterEmail {
  id: string;
  email: string;
  status: EmailStatus;
  attempt_count: number;
  last_attempt_at: string | null;
  subscribed_at: string | null;
  error_message: string | null;
  created_at: string;
}

export interface NewsletterState {
  id: number;
  status: AutomationStatus;
  current_index: number;
  total_emails: number;
  processed_count: number;
  subscribed_count: number;
  failed_count: number;
  last_processed_at: string | null;
  updated_at: string;
}

export interface ProcessResult {
  success: boolean;
  email: string;
  message: string;
  alreadyDone?: boolean;
}

export interface UploadResult {
  inserted: number;
  duplicates: number;
  invalid: number;
  total: number;
}

export interface DashboardStats {
  state: NewsletterState;
  total: number;
  pending: number;
  subscribed: number;
  failed: number;
}
