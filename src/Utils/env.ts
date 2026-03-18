const API_BASE = import.meta.env.VITE_API_URL || "";


export const ENV = {
  IS_DEV_MODE: import.meta.env.DEV,
  API_URL: API_BASE,
  LOG_VISIT_URL: API_BASE + (import.meta.env.VITE_LOG_VISIT_URL || ""),
  HLS_PROXY_URL: API_BASE + (import.meta.env.VITE_HLS_PROXY_URL || "")
} as const;