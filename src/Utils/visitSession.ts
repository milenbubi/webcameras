export interface IVisitResponse {
  id: number;
}


let sessionValue: IVisitResponse | null = null;


/**
 * - `setSessionValue(value)` sets the singleton value once; subsequent calls are ignored.
 * - `getSessionValue()` returns the stored value or `null` if not yet set.
 * - The value is expected to conform to the `IVisitResponse` interface.
 */
export function setSessionValue(value: IVisitResponse) {
  if (!sessionValue) {
    sessionValue = value;
  }
}


/**
 * Returns the stored session value or null if not set
 */
export function getSessionValue() {
  return sessionValue;
}