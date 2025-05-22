import { useEffect } from "react";


const GA_MEASUREMENT_ID = "G-9ET6E76MMW";

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.gtag) {  // Зареждане на скрипта само ако не е зареден вече      
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Инит на dataLayer и gtag функцията
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }
  }, []);
};



export default useGoogleAnalytics;