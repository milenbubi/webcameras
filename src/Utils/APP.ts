import { safeLocalStorage } from "@ffilip/chan180-utils";
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
 * 1. Global constants and configuration (e.g., development mode).
 * 2. Logical "place" resolution from URL or localStorage.
 * 3. Browser-local visit count tracking.
 * 4. Optional authentication codes from URL query parameters.
 *
 * ---
 * ### Usage
 * Access the singleton instance via:
 * ```ts
 * import APP from "./APP";
 * const place = APP.getInitialPlace();
 * const visits = APP.getBrowserVisits();
 * const authCode = APP.getAuthCode();
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
 * - `getAuthCode(): string | undefined` – Returns the one-time auth code, if present.
 */
class AppConfig {
  private static instance: AppConfig;

  private SEARCH_PARAMS: QueryParams;
  private PLACE: Place;
  private AUTH_CODE: string | null;
  private BROWSER_VISITS: number;
  public readonly IS_DEV_MODE: boolean;

  private constructor() {
    this.SEARCH_PARAMS = this.parseUrlSearch();
    this.PLACE = this.setPlace();
    this.AUTH_CODE = this.setAuthCode();
    this.BROWSER_VISITS = this.incrementBrowserVisits();
    this.IS_DEV_MODE = import.meta.env.DEV;
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

  public getAuthCode(): string | undefined {
    const code = this.AUTH_CODE;
    this.AUTH_CODE = null;
    return code || undefined;
  }

  public getBrowserVisits(): number {
    return this.BROWSER_VISITS;
  }


  /* ==================== PRIVATE METHODS ==================== */

  private setAuthCode(): string | null {
    return this.SEARCH_PARAMS["i"] || null;
  }

  private setPlace(): Place {
    return resolvePlace(this.SEARCH_PARAMS[LS_PLACE_KEY]);
  }

  private incrementBrowserVisits() {
    const currentVisits = safeLocalStorage.get(LS_BROWSER_VISITS_KEY);
    const newBrowserVisitsCount = (parseInt(currentVisits ?? "", 10) || 0) + 1;
    safeLocalStorage.set(LS_BROWSER_VISITS_KEY, String(newBrowserVisitsCount));

    return newBrowserVisitsCount;
  }

  private parseUrlSearch(): QueryParams {
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