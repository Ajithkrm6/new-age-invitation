"use client";
import React from "react";
import { styled } from "@mui/system";
import Carousel from "../CustomComponents/Carousel";

const Section = styled("section")({
  height: "100vh", // Full view height
  width: "100%", // Full width
  overflowY: "auto",
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
        <h1 className="pb-8 text-textgreen ">Photo-Booth</h1>
      </div>
      <div className="w-[90%] h-[90%] bg-textgreen bg-opacity-10 flex flex-col justify-center items-center overflow-y-auto backdrop-blur-md rounded-sm">
        <div className="w-[90%] h-[90%] rounded-md flex flex-col justify-center items-center">
          <Carousel />
        </div>
      </div>
    </Section>
  );
};
