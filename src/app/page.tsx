import Image from "next/image";
import { styled } from "@mui/system";
import { HeroSection } from "./sections/heroSection1";
import { MessagesSection } from "./sections/messageSection";
import { GallarySection } from "./sections/gallarySection";
import { Footer } from "./CustomComponents/Footer";
import { VideoSection } from "./sections/videoSection";
import { VenuSection } from "./sections/venuSection";
import { OurStorySection } from "./sections/ourStorySection";
import mainBg from "../../public/images/mainBg3.png";

export default function Home() {
  return (
    // <div className="bg-[#F6FCDF]">
    // {/* // <div className="bg-[linear-gradient(90deg,_#800000,_#173B45)]"> */}
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${mainBg.src})`,
        backgroundSize: "cover", // Optional for covering the entire div
        // backgroundPosition: "center", // Optional for centering the image
      }}
    >
      <HeroSection />
      <OurStorySection />
      <MessagesSection />
      <GallarySection />
      <VideoSection />
      <VenuSection />
      <Footer
        photogphrDetails={{
          photoghprFirmName: "TDM Photography",
          description: "The Dream Memory Photography",
          address: "Visakhapatnam",
          contactnumber: 9618630716,
          email: "TheDreamMemoryPhotography@gmail.com",
        }}
        devDetails={{
          companyName: "Quadverse Technologies",
          description: "Software Company",
          address: "Visakhapatnam",
          contactnumber: 8686668096,
          email: "Ajithkrm6@gmail.com",
          aiMusic: "Ai-Generated Bgm",
        }}
      />
    </div>
  );
}
