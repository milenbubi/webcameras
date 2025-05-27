/**
 * Detects whether the current device is a mobile device or tablet.
 *
 * Handles classic mobile user agents (Android, iPhone, etc.),
 * common tablets (Nexus, Kindle, etc.), and modern iPads
 * that identify as desktop (e.g., iPadOS Safari).
 *
 * @returns {boolean} True if the device is mobile or tablet; False otherwise.
 */
export function isMobile(): boolean {
  const ua = navigator.userAgent;

  // Mobile platforms and common mobile device identifiers
  const classicMobileRegex = /Android|webOS|iPhone|Nexus|iPod|BlackBerry|BB10|IEMobile|Opera\s?Mini|Mobile\s?Safari|Windows\s?Phone|MeeGo|SymbianOS|PlayBook/i;

  // Tablet platforms and popular tablet device identifiers
  const tabletRegex = /Tablet|Kindle|Silk|Tab|Xoom|SCH-I800|GT-P1000/i;

  // Special detection for iPads with desktop userAgent
  const isIpad = ua.includes("iPad") || (
    ua.includes("Macintosh") &&
    ("ontouchend" in document || navigator.maxTouchPoints > 1)
  );

  return classicMobileRegex.test(ua) || tabletRegex.test(ua) || isIpad;
}