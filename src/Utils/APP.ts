import { LS_PLACE_KEY } from "./localStorage";
import { Place, resolvePlace } from "./places";

type QueryParams = Record<string, string>;


// type StatsQueryKeys11 = "place" | "me";
// type StatsQuery11 = Partial<Record<StatsQueryKeys11, string>>;
// let tss: StatsQuery11 = {};



/**
 * APP - Singleton instance of AppConfig
 * Stores global constants, config, parsed URL params
 */
class AppConfig {
  private static instance: AppConfig;

  private PLACE: Place;
  private SEARCH_PARAMS: QueryParams;
  public readonly IS_DEV_MODE: boolean;
  private AUTH_CODE: string | null;

  private constructor() {
    this.SEARCH_PARAMS = this.parseUrlSearch();
    this.PLACE = this.setPlace();
    this.IS_DEV_MODE = import.meta.env.DEV;
    this.AUTH_CODE = this.setAuthCode();
  }


  public static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }


  getInitialPlace(): Place {
    return this.PLACE;
  }


  public getAuthCode(): string | undefined {
    const code = this.AUTH_CODE;
    this.AUTH_CODE = null;
    return code || undefined;
  }
  

  private setAuthCode(): string | null {
    return this.SEARCH_PARAMS["i"] || null;
  }

  private setPlace(): Place {
    return resolvePlace(this.SEARCH_PARAMS[LS_PLACE_KEY]);
  }

  private parseUrlSearch(): QueryParams {
    const search = window.location.search;

    if (!search?.trim) {
      return {};
    }

    const params = new URLSearchParams(search);
    const result: QueryParams = {};

    for (const [key, value] of params.entries()) {
      result[key] = value;
    }

    return result;
  }
}



const APP = AppConfig.getInstance();
export default APP;