import { useEffect } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";

const LS_BROWSER_VISITS_KEY = "browservisits";



/**
 * React hook for logging and tracking site visits.
 *
 * This hook automatically:
 * 1. Increments a browser-local visit counter in `localStorage`.
 * 2. Sends the updated count and `place` identifier to the PHP backend (`visit.php`).
 * 3. The backend response is parsed to a JavaScript object and stored in a singleton using `setSessionValue`.
 *
 * ---
 * ### Behavior
 * - Runs **only once** on component mount.
 * - In production (no `window.location.port`), it logs the visit to the backend.
 * - In development mode, it fetches and logs some site statistics from the live server for debugging.
 *
 * ---
 * ### Local storage key
 * Uses the browservisits key in localStorage to store the per-browser visit count.
 *
 * ---
 * @param {string} place - Logical identifier for the visited page or section (e.g. `"Bulgaria"`, `"Horgos"`, `"Kelebia"`).
 *
 * @example
 * ```ts
 * useRecordVisit("Bulgaria");
 * ```
 * Sends `/php/visit.php?place=Bulgaria&browser_visit_count=3`
 */
export function useRecordVisit(place: string) {
  useEffect(() => {
    if (!window.location.port) {  // Log a new visit (only in production)
      const currentVisits = safeLocalStorage.get(LS_BROWSER_VISITS_KEY);
      const newBrowserVisitsCount = currentVisits ? (parseInt(currentVisits, 10) || 0) + 1 : 1;
      safeLocalStorage.set(LS_BROWSER_VISITS_KEY, String(newBrowserVisitsCount));

      const data = {
        place,
        browser_visit_count: newBrowserVisitsCount
      };

      fetch("/php/visit.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .catch(err => { });
    }
    else {   // Fetch some stats — for DEV purposes only
      return;
      fetch("https://chan180.net/php/test1.php", { method: "GET" })
        .then(res => res.json())
        .then(data => console.log("Dashboard data:", data))
        .catch(err => console.error(err));
    }
  }, []);
} 