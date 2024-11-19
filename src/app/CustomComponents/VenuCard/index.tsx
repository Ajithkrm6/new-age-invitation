"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Modal, Typography, Box } from "@mui/material";
import Map from "../MapsComp";
import CancelIcon from "@mui/icons-material/Cancel";

export interface VenuCardProps {
  img: StaticImageData;
  event?: string;
  description?: string;
  date?: string;
  time?: string;
  latitude: number;
  longitude: number;
  venue?: string;
}

export const VenuCard = (props: VenuCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Card className="w-auto min-w-[] bg-opacity-10 bg-black h-full backdrop-blur-md rounded-sm flex flex-col justify-center items-center gap-3 p-3">
      <div className="w-[250px] h-[250px] bg-white flex justify-center items-center rounded-[250px]">
        <Image
          src={props.img}
          alt="save teh date image"
          width={100}
          height={100}
          className="object-fit w-[200px] h-[200px] rounded-[200px] bg-white"
        />
      </div>
      <CardHeader className="bg-textPink w-full flex justify-center items-center">
        <CardTitle className="text-white">{props.event}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 justify-center items-center">
        <p className="font-sail text-px-18">{props.description}</p>
        <h1 className=" font-sail text-px-18">
          Date:{" "}
          <span className=" text-px-16" style={{ fontWeight: "bold" }}>
            {props.date}
          </span>
        </h1>
        <h1 className=" font-sail text-px-18">
          Time:{" "}
          <span
            className="font-kaushanScript text-px-16"
            style={{ fontWeight: "bold" }}
          >
            {props.time}
          </span>
        </h1>
        <h1 className=" break-words hyphens-auto break-all whitespace-normal text-px-18 font-sail">
          Venu: <span className="font-kaushanScript">{props.venue}</span>
        </h1>
        <div className="w-full flex justify-center items-center">
          <Button
            className="bg-textPink hover:bg-textgreen"
            onClick={() => handleOpen()}
          >
            Show Maps
          </Button>
        </div>
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: "transparent", // Slightly dark background with 20% opacity
              backdropFilter: "blur(6px)",
            },
          },
        }}
      >
        <div className="flex flex-col p-2 justify-center items-center h-[80%] w-[80%] rounded-md">
          <div className="w-full p-2 flex justify-end">
            <CancelIcon onClick={() => handleClose()} />
          </div>
          <Map latitude={props.latitude} longitude={props.longitude} />
        </div>
      </Modal>
    </Card>
  );
};

// 17.771424942512965, 83.31961583731614 haldi
// 17.762940426276053, 83.32101119554729 mandapam
