import { useMemo } from "react";

interface IProps {
  title: string | ((streamIndex: number) => string);
  streamIndex: number;
}



export function useFinalTitle({ title, streamIndex }: IProps) {
  const finalTitle = useMemo(() => {
    return typeof title === "function" ? title(streamIndex) : title;
  }, [title, streamIndex]);


  return { finalTitle };
}