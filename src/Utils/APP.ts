import { isNumeric, safeLocalStorage } from "@ffilip/chan180-utils";
import { Place, resolvePlace } from "./places";
import { LS_BROWSER_VISITS_KEY, LS_PLACE_KEY } from "./localStorage";

type QueryParams = Record<string, string>;

// type StatsQueryKeys = "place" | "me";
// type StatsQuery = Partial<Record<StatsQueryKeys, string>>;
// const sq: StatsQuery = {};



/**
 * Singleton class for global app configuration and visit tracking.
 *
 * This class manages:
 * 1. Global constants and configuration.
 * 2. Logical "place" resolution from URL or localStorage.
 * 3. Browser-local visit count tracking.
 * 4. Optional authentication code from URL query parameters.
 * 5. Dynamic access to other URL query parameters.
 *
 * ---
 * ### Usage
 * Access the singleton instance via:
 * ```ts
 * import APP from "./APP";
 * const place = APP.getInitialPlace();
 * const visits = APP.getBrowserVisits();
 * const authCode = APP.consumeAuthCode();
 * ```
 *
 * ---
 * ### Behavior
 * - Only one instance exists (`AppConfig` is a singleton).
 * - Browser visits are incremented automatically when the singleton is initialized.
 * - Auth code (`i` query parameter) is returned once per page load and then cleared.
 * - Place is resolved once on initialization.
 *
 * ---
 * ### Key Methods
 * - `getInitialPlace(): Place` – Returns the logical place for the current session.
 * - `getBrowserVisits(): number` – Returns the number of visits for this browser (incremented automatically on init).
 * - `consumeAuthCode(): string | undefined` – Returns the one-time auth code, if present.
 */
class AppConfig {
  private static instance: AppConfig;

  private PLACE: Place;
  private AUTH_CODE: string | null;
  private BROWSER_VISITS: number;

  private constructor() {
    const queryParams = this.parseQueryParams();

    this.PLACE = this.setPlace(queryParams);
    this.AUTH_CODE = this.setAuthCode(queryParams);
    this.BROWSER_VISITS = this.incrementBrowserVisits();
  }


  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  /* ==================== PUBLIC METHODS ==================== */

  public getInitialPlace(): Place {
    return this.PLACE;
  }

  public consumeAuthCode(): string | undefined {
    const code = this.AUTH_CODE;
    this.AUTH_CODE = null;
    return code || undefined;
  }

  public getBrowserVisits(): number {
    return this.BROWSER_VISITS;
  }


  /* ==================== PRIVATE METHODS ==================== */

  private setAuthCode(params: QueryParams): string | null {
    return params["i"] ?? null;
  }

  private setPlace(params: QueryParams): Place {
    return resolvePlace(params[LS_PLACE_KEY]);
  }


  private incrementBrowserVisits(): number {
    const raw = safeLocalStorage.get(LS_BROWSER_VISITS_KEY);
    let next = 1;

    // Increment only if stored value is a valid non-negative integer 
    if (isNumeric(raw, { isInteger: true, notNegative: true })) {
      next = Number(raw) + 1;
    }

    // Save the new value to localStorage only if user has not attempted to authorize
    if (!this.AUTH_CODE) {
      safeLocalStorage.set(LS_BROWSER_VISITS_KEY, String(next));
    }

    return next;
  }


  private parseQueryParams(): QueryParams {
    const params = new URLSearchParams(window.location.search);
    const result: QueryParams = {};

    for (const [key, value] of params.entries()) {
      result[key] = value;
    }

    return result;
  }
}



const APP = AppConfig.getInstance();
export default APP;