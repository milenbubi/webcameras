import { useEffect } from "react";
import APP from "./APP";



/**
 * React hook for logging and tracking site visits.
 *
 * This hook automatically sends the visit data to the PHP backend (`visit.php`):
 *    - `place` from `APP.getInitialPlace()`
 *    - `browser_visit_count` from `APP.getBrowserVisits()`
 *    - optional `authCode` from `APP.getAuthCode()`
 *
 * ---
 * ### Behavior
 * - Runs **only once** on component mount.
 * - Production: logs the visit to the backend.
 * - Development: skips logging and optionally fetches stats for testing.
 *
 * @example
 * ```ts
 * useRecordVisit();
 * ```
 * Sends `/php/visit.php` with JSON body like:
 * `{ "place": "Bulgaria", "browser_visit_count": 3, "authCode": "123abc" }`
 */
export function useRecordVisit() {
  useEffect(() => {
    if (!APP.IS_DEV_MODE) {  // Log a new visit (only in production)
      const data = {
        place: APP.getInitialPlace(),
        browser_visit_count: APP.getBrowserVisits(),
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