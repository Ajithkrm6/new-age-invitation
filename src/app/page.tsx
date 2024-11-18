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
          instagram:
            "https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg==",
        }}
        devDetails={{
          companyName: "Hexify Software",
          // description: "Software Company",
          address: "Visakhapatnam",
          instagram:
            "https://www.instagram.com/ajithkrm6?igsh=MTBzanA1dzJoNjR0aw%3D%3D&utm_source=qr",
          linkedIn: "https://www.linkedin.com/in/ajith-kumar-tech22/",
          contactnumber: 8686668096,
          email: "Ajithkumar.tech22@gmail.com",
          aiMusic: "Ai-Generated Bgm",
        }}
      />
    </div>
  );
}

//
//
//
