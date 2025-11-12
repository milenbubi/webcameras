import { useCallback, useState } from "react";
import { safeLocalStorage } from "@ffilip/chan180-utils/helpers";



export function useBooleanLS(key: string) {
  const [isBooleanLSOn, setIsBooleanLSOn] = useState(() => {
    const target = safeLocalStorage.get(key);

    switch (target) {
      case "false": return false;
      default: return true;
    }
  });


  const switchBooleanLS = useCallback(() => {
    const target = safeLocalStorage.get(key);
    const newValue = target === "false" ? "true" : "false";

    setIsBooleanLSOn(newValue !== "false");
    safeLocalStorage.set(key, newValue);
  }, []);


  return { isBooleanLSOn, switchBooleanLS };
}