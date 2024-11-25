import { HeroSection } from "./sections/heroSection1";
import { MessagesSection } from "./sections/messageSection";
import { GallarySection } from "./sections/gallarySection";
import { Footer } from "./CustomComponents/Footer";
import { VideoSection } from "./sections/videoSection";
import { VenuSection } from "./sections/venuSection";
import { OurStorySection } from "./sections/ourStorySection";
import mainBg from "../../public/images/mainBg3.png";
import hexify from "../../public/images/hexifylogo.png";
import tdmLogo from "../../public/images/TdmL.png";

export default function Home() {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url(${mainBg.src})`,
        backgroundSize: "cover",
      }}
    >
      <HeroSection />
      <OurStorySection />
      <GallarySection />
      <VideoSection />
      <MessagesSection />
      <VenuSection />
      <Footer
        photogphrDetails={{
          avatar: tdmLogo,
          photoghprFirmName: "TDM Photography",
          description: "The Dream Memory Photography",
          address: "Visakhapatnam",
          contactnumber: 9618630716,
          email: "THEDREAMMEMORIES.TDM2023@GMAIL.COM",
          instagram:
            "https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg==",
        }}
        devDetails={{
          avtar: hexify,
          companyName: "Hexify Software",
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
