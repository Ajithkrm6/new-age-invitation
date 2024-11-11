import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface VenuCardProps {
  img: string;
  event?: string;
  description?: string;
}

export const VenuCard = (props: VenuCardProps) => {
  return (
    <motion.div className="rounded-md">
      <div className="w-[500px] h-[500px] rounded-[500px] ">
        <Image
          src={props.img}
          alt="cardImg"
          width={400}
          height={400}
          className="object-cover w-full rounded-[500px]"
        />
      </div>
      <div>
        <h1>{props.event}</h1>
        <p>{props.description}</p>
      </div>
      <div>
        <Button>See Maps</Button>
      </div>
    </motion.div>
  );
};
