import { useEffect } from "react";


/**
 * useTrackLeave - React hook to send analytics data when the user leaves the page.
 *
 * This hook attaches a listener to the `beforeunload` event and uses `navigator.sendBeacon`
 * to send a POST request containing the current page URL and a timestamp to a backend endpoint.
 *
 * ⚠️ Limitations & Notes:
 * - Ad blockers or privacy extensions can block the beacon.
 * - `sendBeacon` only sends the **current URL**. It cannot detect where the user navigates next 
 *   (bookmarks, address bar, refresh, external URLs typed manually).
 * - Do NOT rely on `setTimeout`, `fetch`, or asynchronous operations inside `beforeunload`.
 */
export function useTrackLeave() {
  useEffect(() => {
    /**
     * leave - callback function for the beforeunload event.
     * 
     * Collects the current URL and timestamp and sends them via sendBeacon.
     */
    const leave = () => {
      const data = JSON.stringify({
        url: window.location.href,  // current page URL
        ts: Date.now()  // timestamp
      });

      // Send analytics to backend endpoint
      navigator.sendBeacon("https://chan180.net/php/app_leave/on_app_unload.php", data);
    };

    // Attach event listener
    window.addEventListener("beforeunload", leave);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("beforeunload", leave);
    };
  }, []);
}