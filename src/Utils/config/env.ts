const {
  DEV,
  VITE_API_URL = "",
  VITE_LOG_VISIT_PATH = "",
  VITE_HLS_PROXY_PATH = "",
  VITE_DASHBOARD_STATS_PATH = "",
  VITE_HLS_RESOLVE_STREAMURL_PATH = "",
  VITE_RECORD_PLACE_CHANGE_PATH = ""
} = import.meta.env;


const normalizeBaseUrl = (url: string) => url.endsWith("/") ? url.slice(0, -1) : url;

const baseUrl = normalizeBaseUrl(VITE_API_URL);

export const ENV = {
  IS_DEV_MODE: DEV,
  API_URL: baseUrl,
  LOG_VISIT_URL: `${baseUrl}${VITE_LOG_VISIT_PATH}`,
  HLS_PROXY_URL: `${baseUrl}${VITE_HLS_PROXY_PATH}`,
  DASHBOARD_STATS_URL: `${baseUrl}${VITE_DASHBOARD_STATS_PATH}`,
  HLS_RESOLVE_STREAMURL_URL: `${baseUrl}${VITE_HLS_RESOLVE_STREAMURL_PATH}`,
  RECORD_PLACE_CHANGE_URL: `${baseUrl}${VITE_RECORD_PLACE_CHANGE_PATH}`
} as const;