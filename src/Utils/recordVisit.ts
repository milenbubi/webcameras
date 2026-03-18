import { useEffect } from "react";
import APP from "./APP";
import { ENV } from "./env";



/**
 * React hook for logging and tracking site visits.
 *
 * This hook automatically sends the visit data to the PHP backend (`visit.php`):
 *    - `place` from `APP.getInitialPlace()`
 *    - `browserVisitCount` from `APP.getBrowserVisits()`
 *    - `authCode` ( optional )  from `APP.getAuthCode()`
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
 * `{ "place": "Bulgaria", "browserVisitCount": 3, "authCode": "123abc" }`
 */
export function useRecordVisit() {
  useEffect(() => {
    if (!ENV.IS_DEV_MODE) {  // Log a new visit (only in production)
      const data = {
        place: APP.getInitialPlace(),
        browserVisitCount: APP.getBrowserVisits(),
        authCode: APP.consumeAuthCode()
      };

      fetch(ENV.LOG_VISIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .catch(err => { });
    }
    else {  // Dev-only: optionally fetch dashboard stats
      return;
      fetch(ENV.API_URL + "/php/dashboard.php", { method: "GET" })
        .then(res => res.json())
        .then(data => console.log("Dashboard data:", data))
        .catch(err => console.error(err));
    }
  }, []);
} 