export const NEEDS_INPUT = "needs input" as const;

export function isNeedsInput(
  value: string | undefined | null,
): boolean {
  return value === NEEDS_INPUT || value === undefined || value === null || value === "";
}
