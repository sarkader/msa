/**
 * Utility function to merge class names
 * Simple implementation without external dependencies
 */
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs
    .filter((input): input is string => typeof input === "string" && input.length > 0)
    .join(" ");
}
