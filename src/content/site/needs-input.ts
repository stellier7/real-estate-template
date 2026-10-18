import { NEEDS_INPUT } from "./types";

export function isNeedsInput(
  value: string | undefined | null | typeof NEEDS_INPUT,
): value is typeof NEEDS_INPUT {
  return value === NEEDS_INPUT || value === undefined || value === null || value === "";
}

export function displayOrPending(
  value: string,
  pendingLabel: string,
): string {
  return isNeedsInput(value) ? pendingLabel : value;
}
