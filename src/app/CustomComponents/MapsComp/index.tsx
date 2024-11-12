import React from "react";

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const apiKey = process.env.GMAP_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}`;
  const linkUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="w-full h-full flex justify-center rounded-md items-center bg-white">
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <iframe
          className="h-full "
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      </a>
    </div>
  );
};

export default Map;
