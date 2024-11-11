"use client";
import React from "react";
import { styled } from "@mui/system";
import { MusicButton } from "../CustomComponents/MusicButton";
import Image from "next/image";

const Section = styled("section")({
  height: "100vh",
  width: "100%",
  overflowY: "auto",
});

export interface HerSectionProps {
  story?: string;
  backgroundImg?: string;
  couplePic?: string;
}

export const HeroSection = () => {
  return (
    <Section className="flex justify-center items-center">
      <div
        className="w-[89.7%] h-[90%]  bg-center  rounded-md relative bg-[#521432]"
        // style={{
        //   backgroundImage:
        //     "url('https://i.pinimg.com/originals/de/22/1f/de221f4ea3f06b7fb71b0ca7f224d2e3.jpg')",
        // }}
      ></div>
      <div className="w-[90%] h-[90%]   overflow-y-auto bg-white bg-opacity-10 backdrop-blur-sm grid md:grid-cols-2  rounded-md absolute">
        <div className="p-4 flex w-full h-full  justify-center items-center">
          {/* <img
            src="/images/sangeethImg.jpg"
            alt="couple pic"
            className="h-[300px] w-[150px]"
          /> */}
          <Image
            alt="couple"
            src="/images/G&B2.jpg" // Corrected the path from 'imgaes' to 'images'
            width={400}
            height={100}
            className="object-cover w-[600px] rounded-md" // Ensures the image covers the container without distortion
          />
        </div>

        <div className="flex flex-col bg-red justify-center items-center p-5">
          <div className="flex flex-row justify-between items-center p-5 w-full overflow-auto">
            <h1 className="text-white">*🌸✨ Our Love Story ✨🌸*</h1>
            <MusicButton />
          </div>
          <div className="">
            <p className="text-white text-lg">
              In 2017, what started as a bond of brother and sister evolved into
              a beautiful and enduring love 💖. Over the years, we’ve walked
              through life together—filled with laughter 😂, occasional
              arguments 😅, and the challenging journey of winning our families'
              hearts 👨‍👩‍👧‍👦. Though our path wasn’t always smooth, each challenge
              only made our love stronger 💪❤. From leaving behind comfort zones
              🌍 to embracing new experiences, we’ve stood by each other with
              unwavering belief in our journey 💫.Through every test, one thing
              remained constant: our belief in one another 💞. We fought, we
              loved, we grew 🌿, and now, we’re ready to embrace forever 💍,
              cherishing every step that brought us here 💕.
            </p>
            <div>
              <span>
                *Quote:* "Believe, fight, be patient, and with a peaceful heart,
                your love will find its way." ✨
              </span>
            </div>
            <div className="flex justify-center items-center md:pt-10">
              <span> Goutham & Bhavani</span>
            </div>
          </div>
        </div>

        {/* <div className="absolute w-[90%] h-[90%] border-1 border-[#FABC3F]"></div> */}
      </div>
    </Section>
  );
};
