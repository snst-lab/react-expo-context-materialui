import { useEffect } from "react";
import { context, set } from "@/store/context";
import dayjs from "dayjs";

export function setTime(): void {
  const { dispatch } = context();
  useEffect(() => {
    dispatch(set("time", dayjs().format("HH:mm:ss")));
  }, []);
}
