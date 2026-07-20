export function updateCamUrlWithTimestamp(url: string) {
  const camTimestamp = Date.now().toString();
  const urlObj = new URL(url);

  urlObj.searchParams.set("t", camTimestamp);

  return urlObj.toString();
};