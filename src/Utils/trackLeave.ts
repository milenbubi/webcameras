import { useEffect } from "react";
import { getSessionValue } from "./visitSession";


/**
 * useTrackLeave - React hook to track when a user leaves the page.
 *
 * This hook attaches a listener to the `beforeunload` event and attempts to send analytics
 * data to a backend endpoint using XHR with query parameters.
 *
 * ⚠️ Limitations & Notes:
 * - Asynchronous XHR may not always execute reliably during page unload in modern browsers.
 *   Some browsers may cancel the request if the page is closing too quickly.
 * - Ad blockers or privacy extensions can block the XHR request.
 * - This hook only sends the current URL; it cannot detect where the user navigates next
 *   (e.g., bookmarks, address bar, external URLs typed manually, or page refreshes).
 * - Please do not rely on additional asynchronous operations (like `setTimeout` or `fetch`)
 *   inside the `beforeunload` event, as they may not complete before the page unloads.
 */
export function useTrackLeave() { 
  useEffect(() => {
    /**
     * leave - callback function for the beforeunload event.
     * 
     * Collects the current URL and timestamp and sends to the server.
     */
    const leave = () => {
      // Send analytics to backend endpoint
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `https://chan180.net/php/logs/log_request.php?id=${getSessionValue()?.id || ""}`, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      try { xhr.send(); } catch (e) { /* ignore */ }
    };

    // Attach event listener
    window.addEventListener("beforeunload", leave);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("beforeunload", leave);
    };
  }, []);
}