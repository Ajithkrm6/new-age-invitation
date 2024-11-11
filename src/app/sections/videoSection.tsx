"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import ReactPlayer from "react-player";

const Section = styled("section")({
  height: "100vh",
  width: "100%",
  overflowY: "auto",
});

export const VideoSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the state to true once the component is mounted on the client
    setIsClient(true);
  }, []);

  return (
    <Section className="flex justify-center items-center">
      <div
        className="w-[90%] h-[90%] bg-cover bg-center rounded-md relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/de/22/1f/de221f4ea3f06b7fb71b0ca7f224d2e3.jpg')",
        }}
      ></div>

      <div className="w-[90%] h-[90%] bg-white bg-opacity-10 overflow-y-auto backdrop-blur-md flex justify-center  items-center rounded-md absolute">
        <div className="w-full h-full flex justify-center items-center rounded-md">
          {isClient && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dF5XY1by5jQ"
              controls={true}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }} // Ensures the video covers the entire area
            />
          )}
        </div>
      </div>
    </Section>
  );
};
