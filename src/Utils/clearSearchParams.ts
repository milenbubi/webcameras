import { useEffect } from "react";


/**
 * Custom React hook that removes any query parameters from the current URL
 * without reloading the page or breaking React state.
 *
 * This hook should typically be called once (e.g. on mount) to ensure
 * a clean URL without search params, for example after OAuth redirects,
 * temporary query flags, or other transient URL parameters.
 *
 * @example
 * // Clears ?token=abc123 from the URL on mount
 * useClearSearchParams();
 */
export function useClearSearchParams() {
  useEffect(() => {
    if (window.location.search) {
      const { origin, pathname } = window.location;
      window.history.replaceState({}, document.title, origin + pathname);
    }
  }, []);
}