"use client";
import React, { useRef } from "react";
import { styled } from "@mui/system";
import { MusicButton } from "../CustomComponents/MusicButton";
import Image from "next/image";
import { DaysCounter } from "../CustomComponents/DaysCounter";
import { motion } from "framer-motion";
import heroCloseup from "../../../public/images/heroCloseUp2.jpg";
import { useInView } from "react-intersection-observer";

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

export interface HerSectionProps {
  story?: string;
  backgroundImg?: string;
  couplePic?: string;
}

export const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  return (
    <Section
      // variants={containerVariants}
      className="flex flex-col justify-center items-center md:flex-row"
    >
      <motion.div
        ref={ref} // Add the reference for intersection observer
        initial={{ opacity: 0, y: 100 }} // Initial state: hidden and 100px down
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 100, // Slide up when in view
        }}
        transition={{
          duration: 1, // Animation duration
          ease: "easeOut", // Smooth easing
        }}
        className="w-[90%] h-[90%] flex gap-3 flex-col justify-center items-center"
      >
        <motion.div className="flex justify-center items-center flex-col">
          <motion.h1 className="font-sarina text-px-22 text-textgreen md:text-px-24 lg:text-px-30 xl:text-px-50">
            Goutham & Bhavani
          </motion.h1>
          <motion.h1
            className="font-jostSemiBold text-textgreen text-px-14"
            // variants={slideUpVariants}
          >
            We Are Getting Married on December 11th 2024
          </motion.h1>
          <motion.div className="w-[70%] flex justify-center items-center">
            <DaysCounter targetDate="12-11-2024" />
          </motion.div>
          <motion.div className="w-full flex flex-col justify-center  items-center">
            <MusicButton />
            <p className="text-textgreen text-px-12 font-jostSemiBold">
              (Tap the button for musical experience)
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-[90%] h-[90%] flex justify-center items-center relative pb-10">
        {/* Image Container */}
        <motion.div
          ref={ref} // Add the reference for intersection observer
          initial={{ opacity: 0, y: 100 }} // Initial state: hidden and 100px down
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 100, // Slide up when in view
          }}
          transition={{
            duration: 1, // Animation duration
            ease: "easeOut", // Smooth easing
          }}
          className="flex justify-center items-center h-auto p-2 w-[270px] md:w-[450px] lg:w-[415px]"
        >
          <motion.div className="relative w-[250px] md:w-[400px] lg:w-[403px]">
            <Image
              alt="couple"
              src={heroCloseup}
              width={400}
              height={100}
              className="object-cover w-full rounded-md"
              priority // Use priority for above-the-fold images
              quality={75} // Adjust quality if needed
            />
            {/* Imaginary Container (Overlay) */}
            {/* <div className="absolute inset-0 flex flex-col justify-between rounded-md">
              <div>hello</div>
              <div className="w-full bg-white flex justify-end">world</div>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
