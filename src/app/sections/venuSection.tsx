"use client";
import React from "react";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { VenuCard } from "../CustomComponents/VenuCard";

const Section = styled(motion.section)({
  height: "100vh",
  width: "100%",
  overflowY: "auto",
  marginBottom: "10px",
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For Internet Explorer and Edge
  "&::-webkit-scrollbar": {
    display: "none", // For Chrome, Safari, and Edge
  },
});

export const VenuSection = () => {
  return (
    <Section className="flex justify-center items-center ">
      <div className="w-[95%] h-[95%] grid md:grid-cols-3 gap-3">
        <VenuCard
          img="/images/SaveTheDateGB.png"
          event="Muhurtham"
          description=" Request your gracious presence for the wedding of Nammi Narendra Goutham Son of Nammi Apalaraju - Parvathi, & Rajana Bhavani Daughter of Rajana Vishawanadham & Lakshmi"
          date="10th December 2024"
          time="From 7:30Pm Onwards"
        />

        <VenuCard
          img="/images/SaveTheDateGB.png"
          event="Reception"
          description=" Request your gracious presence for the wedding of Nammi Narendra Goutham Son of Nammi Apalaraju - Parvathi, & Rajana Bhavani Daughter of Rajana Vishawanadham & Lakshmi"
          date="10th December 2024"
          time="From 7:30Pm Onwards"
        />
        <VenuCard
          img="/images/SaveTheDateGB.png"
          event="Dinner"
          description="At the Venu"
          date="10th December 2024"
          time="From 7:30Pm Onwards"
        />
      </div>
    </Section>
  );
};

// <div className="w-[95%] h-[95%] bg-white bg-opacity-10 overflow-y-auto backdrop-blur-md grid md:grid-cols-2  rounded-sm absolute">
//     <div className=" flex flex-col w-full h-full">
//       <div className=" flex flex-col w-full h-full p-5 rounded-md ">
//         <div className=" flex flex-col-2 w-full p-5">
//           <div className=" w-full flex justify-center items-center hidden md:block">
//             <Image
//               alt="couple"
//               src="/images/MusicalInst.png"
//               width={400}
//               height={100}
//               className="object-cover w-[200px] rounded-md "
//             />
//           </div>
//           <div className="w-full flex flex-col justify-center items-center gap-2">
//             <h1 className="flex justify-center w-full">
//               Request your gracious presence for the wedding of{" "}
//             </h1>
//             <h1>Nammi Narendra Goutham </h1>
//             <p>Son of Nammi Apalaraju & Parvathi</p>
//             <span>&</span>
//             <h1>Rajana Bhavani</h1>
//             <p>Daughter of Rajana Vishawanadham & Lakshmi </p>
//           </div>
//         </div>

//         <div className="flex flex-col-2 w-full">
//           <div className="flex justify-center flex-col items-center w-full">
//             <h1 className="break-all whitespace-normal text-xl w-full">
//               Date:
//             </h1>
//             <h1 className="break-all whitespace-normal text-lg">
//               Early Hours of 11th December 2024
//             </h1>
//             <h1 className="break-all whitespace-normal text-xl text-start w-full">
//               Reception:
//             </h1>
//             <h1 className="break-all whitespace-normal">
//               At the venu on 10th December 2024
//             </h1>
//             <h1 className="break-all whitespace-normal">
//               Followed by Dinner From 8 pm
//             </h1>
//             <h1 className="break-all whitespace-normal text-xl text-start w-full">
//               Venu:
//             </h1>
//             <h1 className="break-all whitespace-normal">
//               Yadavs Function hall, Arilova, Visakhapatnam
//             </h1>
//           </div>
//           <div className=" w-full justify-center items-center hidden md:block">
//             <Image
//               alt="couple"
//               src="/images/SaveTheDateGB.png"
//               width={400}
//               height={100}
//               className="object-cover w-[200px] rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="flex flex-col justify-center items-center p-5 rounded-md">
//       <Map latitude={17.714294} longitude={83.323685} />
//     </div>
//   </div>
