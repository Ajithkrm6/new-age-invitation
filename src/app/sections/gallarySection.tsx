"use client";
import React from "react";
import { styled } from "@mui/system";
import Carousel from "../CustomComponents/Carousel";
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

const pSlides = [
  "/images/G&B2.jpg",
  "/images/G&B1.jpg",
  "/images/G&B2.jpg",
  "/images/G&B1.jpg",
];

const lSlides = [
  "/images/G&B2.jpg",
  "/images/G&B2.jpg",
  "/images/G&B2.jpg",
  "/images/G&B2.jpg",
];

export const GallarySection = () => {
  return (
    <Section className="flex flex-col justify-center items-center">
      <div>
        <h1 className="pb-5 font-sail text-px-28 text-textgreen">
          Photo-Booth
        </h1>
      </div>
      <div className="w-[95%] h-[95%] bg-textgreen bg-opacity-10 flex flex-col justify-center items-center overflow-y-auto backdrop-blur-md rounded-sm">
        <div className="w-[95%] h-[95%] rounded-md flex flex-col justify-center items-center">
          <Carousel />
        </div>
      </div>
    </Section>
  );
};
