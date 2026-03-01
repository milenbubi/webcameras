import { useEffect } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils";
import APP from "./APP";
import { LS_BROWSER_VISITS_KEY } from "./localStorage";



/**
 * React hook for logging and tracking site visits.
 *
 * This hook automatically:
 * 1. Increments a browser-local visit counter in `localStorage`.
 * 2. Sends the updated count and the current `place` (from `APP.getInitialPlace()`) to the PHP backend (`visit.php`).
 * 3. In development mode, optionally fetches some stats from a live server for debugging.
 *
 * ---
 * ### Behavior
 * - Runs **only once** on component mount.
 * - Uses `APP.getInitialPlace()` to determine the logical place identifier.
 * - Production: logs the visit to the backend.
 * - Development: skips logging (or fetches stats for testing).
 *
 * ---
 * ### Local storage key
 * Uses the browser visits key (`LS_BROWSER_VISITS_KEY`) in `localStorage` to store the per-browser visit count.
 *
 * @example
 * ```ts
 * useRecordVisit();
 * ```
 * Sends `/php/visit.php?place=Bulgaria&browser_visit_count=3`
 */
export function useRecordVisit() {
  useEffect(() => {
    if (!APP.IS_DEV_MODE) {  // Log a new visit (only in production)
      const currentVisits = safeLocalStorage.get(LS_BROWSER_VISITS_KEY);
      const newBrowserVisitsCount = (parseInt(currentVisits ?? "", 10) || 0) + 1;
      safeLocalStorage.set(LS_BROWSER_VISITS_KEY, String(newBrowserVisitsCount));

      const data = {
        place: APP.getInitialPlace(),
        browser_visit_count: newBrowserVisitsCount,
        authCode: APP.getAuthCode()
      };

      fetch("/php/visit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .catch(err => { });
    }
    else {  // Dev-only: optionally fetch dashboard stats
      return;
      fetch("https://chan180.net/php/dashboard.php", { method: "GET" })
        .then(res => res.json())
        .then(data => console.log("Dashboard data:", data))
        .catch(err => console.error(err));
    }
  }, []);
} 