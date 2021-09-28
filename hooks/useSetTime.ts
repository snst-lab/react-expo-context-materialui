import { useEffect } from "react";
import { context } from "@/store/context";
import dayjs from "dayjs";

export function useSetTime(): void {
  const { set } = context();
  useEffect(() => {
    set("time", dayjs().format("HH:mm:ss"));
  }, []);
}
