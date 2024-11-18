"use client";
import React from "react";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { VenuCard } from "../CustomComponents/VenuCard";
import sangeet from "../../../public/images/stest.jpg";
import haldi from "../../../public/images/haldi.png";
import reception from "../../../public/images/reception1.jpg";
import dinner from "../../../public/images/Dinner.jpg";
import muhurtham from "../../../public/images/muhurtham.jpg";
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
  const data = [
    {
      id: "1",
      img: haldi,
      event: "Haldi",
      description:
        "Join us as we celebrate love, laughter, and a splash of vibrant colors at our Haldi Ceremony! Let&apos;s make it a joyful start to our wedding festivities.",
      date: "8th December 2024",
      time: "From 4Pm Onwards",
      venue: "At my Home",
      latitude: 17.771424942512965,
      longitude: 83.31961583731614,
    },
    {
      id: "2",
      img: sangeet,
      event: "Sangeeth",
      description:
        "Get ready to enjoy and celebrate with us at our Sangeet Night! Let's dance, sing, and create unforgettable memories together.",
      date: "10th December 2024",
      time: "From 10Pm Onwards",
      venue:
        "Sri Radha Krishna Kalyanamandapam, Q87C+4C6, Thota Garuvu, Arilova, Visakhapatnam ",
      latitude: 17.762812521841266,
      longitude: 83.32100694675292,
    },
    {
      id: "3",
      img: reception,
      event: "Reception",
      description:
        "We are excited to celebrate our love with you! Please join us for our wedding reception as we begin this new chapter together. Your presence will make our day even more special.",
      date: "10th December 2024",
      time: "From 7pm Onwards",
      venue:
        "Sri Radha Krishna Kalyanamandapam, Q87C+4C6, Thota Garuvu, Arilova, Visakhapatnam ",
      latitude: 17.762812521841266,
      longitude: 83.32100694675292,
    },
    {
      id: "4",
      img: dinner,
      event: "Dinner",
      description:
        "Food, friends, family,love,fun and great memories—let's make it a night to remember! Join me for dinner at my place.",
      date: "10th December 2024",
      time: "From 7pm Onwards",
      venue:
        "Sri Radha Krishna Kalyanamandapam, Q87C+4C6, Thota Garuvu, Arilova, Visakhapatnam ",
      latitude: 17.762812521841266,
      longitude: 83.32100694675292,
    },
    {
      id: "5",
      img: muhurtham,
      event: "Muhurtham",
      description:
        "With immense joy and love, we invite you to our wedding muhurtham. Please join us on this special day to bless our union and celebrate this beautiful moment together.",
      date: "Early Hours of 11th December 2024",
      time: "4:14Am",
      venue:
        "Sri Radha Krishna Kalyanamandapam, Q87C+4C6, Thota Garuvu, Arilova, Visakhapatnam ",
      latitude: 17.762812521841266,
      longitude: 83.32100694675292,
    },
  ];
  return (
    <Section className="flex justify-center items-center ">
      <div className="w-[95%] h-[95%] grid md:grid-cols-3 gap-3">
        {data.map((event, index) => (
          <VenuCard
            key={event.id}
            img={event.img}
            event={event.event}
            description={event.description}
            date={event.date}
            time={event.time}
            latitude={event.latitude}
            longitude={event.longitude}
            venue={event.venue}
          />
        ))}
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
