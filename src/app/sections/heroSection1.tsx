"use client";
import React, { useRef } from "react";
import { styled } from "@mui/system";
import { MusicButton } from "../CustomComponents/MusicButton";
import Image from "next/image";
import { DaysCounter } from "../CustomComponents/DaysCounter";
import { motion, useInView } from "framer-motion";
import heroCloseup from "../../../public/images/heroCloseup.png";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section
      variants={containerVariants}
      className="flex flex-col justify-center items-center md:flex-row   "
    >
      <motion.div
        animate={{ y: 20 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="w-[90%] h-[90%] flex gap-3 flex-col justify-center items-center"
      >
        {/* <motion.div className="w-[400px] md:w-[430px] lg:w-[600px]">
          <Image
            alt="couple"
            src="/images/frametp.png"
            width={400}
            height={10}
            className="object-cover w-full rounded-md"
          />
         
         </motion.div>  */}
        <motion.div className="flex justify-center items-center flex-col">
          <motion.h1 className="font-sail text-px-36 md:text-px-70">
            Goutham & Bhavani
          </motion.h1>
          <motion.h1
            className="font-jostSemiBold text-textgreen"
            variants={slideUpVariants}
          >
            We Are Getting Married on December 11th 2024
          </motion.h1>
          <motion.div className="w-[70%] flex justify-center items-center">
            <DaysCounter targetDate="12-11-2024" />
          </motion.div>
          <motion.div variants={slideUpVariants}>
            <MusicButton />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-[90%] h-[90%] flex justify-center items-center relative pb-10">
        {/* Image Container */}
        <motion.div
          animate={{ y: 20 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="flex justify-center items-center h-auto p-2 w-[270px] md:w-[450px] lg:w-[415px]"
        >
          <motion.div className="relative w-[250px] md:w-[430px] lg:w-[403px]">
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
            <div className="absolute inset-0 flex flex-col justify-between rounded-md">
              <div>hello</div>
              <div className="w-full bg-white flex justify-end">world</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
