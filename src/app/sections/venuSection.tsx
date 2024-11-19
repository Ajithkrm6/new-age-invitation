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
        "Join us as we celebrate love, laughter, and a splash of vibrant colors at our Haldi Ceremony! Let's make it a joyful start to our wedding festivities.",
      date: "8th December 2024",
      time: "From 4:00PM Onwards",
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
      time: "From 10:00PM Onwards",
      venue:
        "Sri Radha Krishna Kalyanamandapam, Q87C+4C6, Thota Garuvu, Arilova, Visakhapatnam",
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
      time: "From 7:00PM Onwards",
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
      time: "From 7:00PM Onwards",
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
      time: "4:14AM",
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
