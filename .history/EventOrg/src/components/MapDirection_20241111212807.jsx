import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    // Dynamically load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    // Initialize map once the script is loaded
    window.initMap = () => {
      const map = new window.google.maps.Map(
        document.getElementById("googleMap"),
        {
          center: { lat: 51.508742, lng: -0.12085 },
          zoom: 5,
        }
      );
    };

    // Cleanup the script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>My First Google Map</h1>
      <div id="googleMap" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default GoogleMap;
