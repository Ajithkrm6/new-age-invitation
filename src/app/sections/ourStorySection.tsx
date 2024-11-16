"use client";
import React from "react";
import { styled } from "@mui/system";
import Image from "next/image";
import { motion } from "framer-motion";
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

export const OurStorySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  return (
    <Section className="flex flex-col p-5">
      <div className=" w-full h-[15%] flex flex-col justify-center items-center">
        <h1 className="text-textgreen font-jostSemiBold">Our Story</h1>
        <h1 className="font-sail text-px-28 text-textgreen">How it started</h1>
      </div>
      <div className="grid md:grid-cols-2 w-full h-[85%]">
        <div className="bg-[url('/images/TestBg3.png')] flex justify-center items-center">
          <motion.div
            ref={ref} // Add the reference for intersection observer
            initial={{ opacity: 0 }} // Initial state: hidden and 100px down
            animate={{
              opacity: inView ? 1 : 0, // Fade in when in view
            }}
            transition={{
              duration: 1, // Animation duration
              ease: "easeOut", // Smooth easing
            }}
            className="flex justify-center items-center h-auto p-2 w-[270px] md:w-[450px] lg:w-[415px]"
          >
            <div className="relative w-[250px] md:w-[430px] lg:w-[403px]">
              <Image
                alt="couple"
                src="/images/howItStrd.jpg"
                width={400}
                height={100}
                className="object-cover w-full rounded-md"
              />
              {/* Imaginary Container (Overlay) */}
              <div className="absolute inset-0 border-2 flex flex-col border-dashed border-blue-500 rounded-md"></div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-textgreen text-px-20 font-pacifico break-words hyphens-auto">
            In 2017, what started as a bond of brother and sister evolved into a
            beautiful and enduring love 💖. Over the years, we&apos;ve walked
            through life together—filled with laughter, occasional arguments,
            and the challenging journey of winning our families hearts. Though
            our path wasn&apos;t always smooth, each challenge only made our
            love stronger. From leaving behind comfort zones to embracing new
            experiences, we&apos;ve stood by each other with unwavering belief
            in our journey.Through every test, one thing remained constant: our
            belief in one another. We fought, we loved, we grew, and now,
            we&apos;re ready to embrace forever, cherishing every step that
            brought us here 💕.
          </p>
          <div className="pt-4">
            <h1 className="text-textgreen text-px-20 font-pacifico">
              Quote: "Believe, fight, be patient, and with a peaceful heart,
              your love will find its way."
            </h1>
          </div>
          <div className="flex justify-center items-center pb-10 md:pt-10">
            <h1 className="text-textgreen text-px-20 font-pacifico">
              Goutham & Bhavani
            </h1>
          </div>
        </div>
      </div>
    </Section>
  );
};
