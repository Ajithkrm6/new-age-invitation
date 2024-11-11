import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";

export interface FooterProps {
  photogphrDetails?: {
    photoghprFirmName?: string;
    description?: string;
    avatar?: string;
    contactnumber?: number;
    address?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    email?: string;
  };
  devDetails?: {
    companyName?: string;
    description?: string;
    email?: string;
    avtar?: string;
    contactnumber?: number;
    address?: string;
    website?: string;
    instagram?: string;
    aiMusic?: string;
  };
}

export const Footer = ({ photogphrDetails, devDetails }: FooterProps) => {
  return (
    <div className="bg-opacity-10 bg-textgreen h-full backdrop-blur-md rounded-tr-[10px] rounded-tl-[10px] p-4">
      <div className="grid  md:grid-cols-2">
        {/* photographer credits */}
        <div className="grid grid-cols-[15%,85%] justify-center items-center gap-2">
          <div className=" h-full justify-start md:flex flex-col items-end pt-3">
            <Avatar>
              <AvatarImage src={photogphrDetails?.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="pt-1">
            <h1 className="text-white">
              {photogphrDetails?.photoghprFirmName}
            </h1>
            <p className="text-white">{photogphrDetails?.description}</p>
            <p className="text-white">
              <span>Address: </span>
              {photogphrDetails?.address}
            </p>
            <p className="text-white">
              <span>Mobile: </span>
              {photogphrDetails?.contactnumber}
            </p>
            <p className="break-all whitespace-normal text-white">
              <span>Email: </span>
              {photogphrDetails?.email}
            </p>
            <div className="flex justify-start items-start gap-3 flex-wrap pt-2">
              <Link href="https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg== ">
                <Image
                  src="/images/insta.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[30px]"
                />
              </Link>

              <Link href="https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg== ">
                <Image
                  src="/images/fb.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[40px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* developer credits */}
        <div className="grid grid-cols-[15%,85%] justify-center items-center gap-2">
          <div className=" h-full justify-start md:flex flex-col items-end pt-2">
            <Avatar>
              <AvatarImage src={devDetails?.avtar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="pt-1">
            <h1 className="text-white">{devDetails?.companyName}</h1>
            <p className="text-white">{devDetails?.description}</p>
            <p className="text-white">
              <span>Address: </span>
              {devDetails?.address}
            </p>
            <p className="text-white">
              <span>Mobile: </span>
              {devDetails?.contactnumber}
            </p>
            <p className="break-all whitespace-normal text-white">
              <span>Email: </span>
              {devDetails?.email}
            </p>
            <p className="break-all whitespace-normal text-white">
              <span>Music: </span>
              {devDetails?.aiMusic}
            </p>
            <div className="flex justify-start items-start gap-3 flex-wrap pt-2">
              <Link href="https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg== ">
                <Image
                  src="/images/insta.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[30px]"
                />
              </Link>

              <Link href="https://www.instagram.com/tdm_photography2023?igsh=MXI5NmxnbWRvaGd6bg== ">
                <Image
                  src="/images/fb.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[40px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* rights reserved */}
      </div>
      <div className="flex justify-center items-center w-full">
        <p className="text-white">All Rights Reserved</p>
        <CopyrightIcon className="h-[8px] w-[8px] text-white" />
      </div>
    </div>
  );
};
