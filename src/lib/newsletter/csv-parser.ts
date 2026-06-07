import Papa from "papaparse";

export interface ParsedCSV {
  emails: string[];
  errors: string[];
  totalRows: number;
}

export function parseCSVContent(content: string): ParsedCSV {
  const emails: string[] = [];
  const errors: string[] = [];

  const result = Papa.parse<Record<string, string>>(content, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim().toLowerCase(),
  });

  if (result.errors.length > 0) {
    result.errors.forEach((err) => {
      errors.push(`Row ${err.row}: ${err.message}`);
    });
  }

  result.data.forEach((row, index) => {
    // Support both 'email' column and first column
    const email =
      row["email"] || row["Email"] || row["EMAIL"] || Object.values(row)[0];

    if (!email) {
      errors.push(`Row ${index + 2}: No email found`);
      return;
    }

    const trimmed = email.trim().toLowerCase();

    if (!trimmed) {
      errors.push(`Row ${index + 2}: Empty email`);
      return;
    }

    emails.push(trimmed);
  });

  return {
    emails,
    errors,
    totalRows: result.data.length,
  };
}
