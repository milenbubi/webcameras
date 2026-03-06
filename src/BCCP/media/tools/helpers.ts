interface IProps {
  url: string;
  setCamUrl: (value: string) => void;
}


export function updateCamUrlWithTimestamp({ url, setCamUrl }: IProps) {
  const camTimestamp = Date.now().toString();
  const urlObj = new URL(url);

  urlObj.searchParams.set("t", camTimestamp);

  setCamUrl(urlObj.toString());
};