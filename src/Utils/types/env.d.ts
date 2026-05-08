/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LOG_VISIT_PATH: string;
  readonly VITE_HLS_PROXY_PATH: string;
  readonly VITE_DASHBOARD_STATS_PATH: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}