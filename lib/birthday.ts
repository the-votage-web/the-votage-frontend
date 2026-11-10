// Shared helpers for collecting a member's birthday (day + month only, no year).

export const BIRTH_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

// Max days per month. February allows 29 so leap-day birthdays can be recorded.
const MAX_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** month is 1-12 */
export function daysInBirthMonth(month: number): number {
  return MAX_DAYS[month - 1] ?? 31;
}

export function isValidBirthday(day: number, month: number): boolean {
  return (
    Number.isInteger(day) &&
    Number.isInteger(month) &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysInBirthMonth(month)
  );
}

/** Format as "DD/MM", the format sent to the check-in assistant. */
export function formatBirthday(day: number, month: number): string {
  return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}`;
}
