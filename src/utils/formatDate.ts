import { DateTime } from "luxon";

/**
 * Format ISO date string (yyyy-MM-dd) from API to "MMMM dd, yyyy".
 * @param apiIsoDate - A date string in "yyyy-MM-dd" format
 * @returns Formatted date string (e.g., "November 20, 2024")
 */

export function formatDate(apiIsoDate: string): string {
  const dateTime = DateTime.fromISO(apiIsoDate);
  const formattedDate = dateTime.toFormat("MMMM dd, yyyy");
  return formattedDate;
}
