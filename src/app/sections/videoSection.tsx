"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Section = styled(motion.section)({
  height: "100vh",
  width: "100%",
  overflowY: "auto",
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For Internet Explorer and Edge
  "&::-webkit-scrollbar": {
    display: "none", // For Chrome, Safari, and Edge
  },
});
export const VideoSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the state to true once the component is mounted on the client
    setIsClient(true);
  }, []);

  return (
    <Section className="flex justify-center items-center">
      <div className="w-[95%] h-[95%] bg-white bg-opacity-10 overflow-y-auto backdrop-blur-md flex justify-center  items-center rounded-md">
        <div className="w-[95%] h-[95%] flex justify-center items-center rounded-md">
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
