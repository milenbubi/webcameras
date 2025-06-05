import { useState, useEffect } from "react";



let visibilityState = document.visibilityState;  // Глобално кеширано
const listeners = new Set<(visible: boolean) => void>();

function onVisibilityChange() {
  visibilityState = document.visibilityState;
  const isVisible = visibilityState === "visible";
  listeners.forEach(listener => listener(isVisible));
}



export function useDocumentVisibility() {
  const [isVisible, setIsVisible] = useState(() => document.visibilityState === "visible");


  useEffect(() => {  // Добавяме listener, който ще обновява локалния state
    const listener = (visible: boolean) => setIsVisible(visible);
    listeners.add(listener);

    if (listeners.size === 1) {  // Ако е първи подписващ, добавяме глобалния event listener
      document.addEventListener("visibilitychange", onVisibilityChange);
    }

    // Синхронизираме текущото състояние
    setIsVisible(visibilityState === "visible");

    return () => {
      listeners.delete(listener);

      if (listeners.size === 0) {  // Ако няма повече слушатели, махаме глобалния listener
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
  }, []);

  return isVisible;
}