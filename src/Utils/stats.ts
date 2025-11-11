import { useEffect } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";

const LS_BROWSER_VISITS_KEY = "browservisits";



/**
 * React hook for logging and tracking site visits.
 *
 * This hook automatically:
 * 1. Increments a browser-local visit counter in `localStorage`.
 * 2. Sends the updated count and `place` identifier to the PHP backend (`visit.php`).
 *
 * ---
 * ### Behavior
 * - Runs **only once** on component mount.
 * - In production (no `window.location.port`), it logs the visit to the backend.
 * - In development mode, it fetches and logs site statistics from the live server for debugging.
 *
 * ---
 * ### Local storage key
 * Uses `browservisits` to store the per-browser visit count.
 *
 * ---
 * @param {string} place - Logical identifier for the visited page or section (e.g. `"Bulgaria"`, `"Horgos"`, `"Kelebia"`).
 *
 * @example
 * ```ts
 * useStats("Bulgaria");
 * ```
 *
 * The backend receives:
 * `/php/visit.php?place=Bulgaria&browser_visit_count=3`
 */
export function useStats(place: string) {
  useEffect(() => {
    if (!window.location.port) {  // Log a new visit (only in production)

      const currentVisits = safeLocalStorage.get(LS_BROWSER_VISITS_KEY);
      const newbrowserVisitsCount = currentVisits ? (parseInt(currentVisits, 10) || 0) + 1 : 1;
      safeLocalStorage.set(LS_BROWSER_VISITS_KEY, String(newbrowserVisitsCount));

      fetch(
        `/php/visit.php?place=${place}&browser_visit_count=${newbrowserVisitsCount}`,
        { method: "GET" }
      )
        .catch(err => { });
    }
    else {   // Fetch stats — for DEV purposes only
      fetch("https://chan180.net/php/first_stats_file.php", { method: "GET" })
        .then(res => res.json())
        .then(data => console.log("Site stats:", data))
        .catch(err => console.error(err));
    }
  }, []);
} 