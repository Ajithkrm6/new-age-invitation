import React, { useEffect, useState } from "react";

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const [mapUrl, setMapUrl] = useState<string>("");

  useEffect(() => {
    const fetchMapUrl = async () => {
      try {
        const response = await fetch(
          `/api/maps?latitude=${latitude}&longitude=${longitude}`
        );
        const data = await response.json();
        setMapUrl(data.mapUrl);
      } catch (error) {
        console.error("Error fetching map URL:", error);
      }
    };

    fetchMapUrl();
  }, [latitude, longitude]);

  const linkUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="w-full h-full flex justify-center rounded-md items-center bg-white">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        {mapUrl ? (
          <iframe
            className="h-full"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapUrl}
          ></iframe>
        ) : (
          <p>Loading Map...</p>
        )}
      </a>
    </div>
  );
};

export default Map;
