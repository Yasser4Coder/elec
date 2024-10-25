import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    // Load the Tripetto scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeTripetto = async () => {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/@tripetto/runner");
        await loadScript(
          "https://cdn.jsdelivr.net/npm/@tripetto/runner-autoscroll"
        );
        await loadScript("https://cdn.jsdelivr.net/npm/@tripetto/studio");

        // Initialize Tripetto after scripts are loaded
        if (window.TripettoStudio && window.TripettoAutoscroll) {
          window.TripettoStudio.form({
            runner: window.TripettoAutoscroll,
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNExMc0ZuNStNZWdMSnRMU0RVR2J3MUVGL1czM3hqZ1ZJMW51SThGVURrVT0iLCJkZWZpbml0aW9uIjoiV3J3QVgvYmhPdnVaVnQvMERpcFdVMlpXcmlYUDhIMEgyTzhZR1ZCZVZqZz0iLCJ0eXBlIjoiY29sbGVjdCJ9.PUylkEC3zp4c5afeaM1zcZ58rVcuNJKNuV2UkUA32Zc",
            element: "tripetto-1e0ovzp",
          });
        }
      } catch (error) {
        console.error("Failed to load Tripetto scripts", error);
      }
    };

    initializeTripetto();

    // Cleanup to remove scripts on unmount
    return () => {
      document.querySelectorAll("script[src*='tripetto']").forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return <div id="tripetto-1e0ovzp"></div>;
};

export default Test;
