import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import fb from "../../../../public/images/fb.svg";
import insta from "../../../../public/images/insta.svg";
import linkdin from "../../../../public/images/linkdin.svg";

export interface FooterProps {
  photogphrDetails?: {
    photoghprFirmName?: string;
    description?: string;
    avatar?: StaticImageData | string;
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
    avtar?: StaticImageData | string;
    contactnumber?: number;
    address?: string;
    website?: string;
    instagram?: string;
    linkedIn?: string;
    aiMusic?: string;
  };
}

export const Footer = ({ photogphrDetails, devDetails }: FooterProps) => {
  return (
    <div className="bg-opacity-10 bg-black h-full backdrop-blur-md pt-4 rounded-tr-[20px] rounded-tl-[20px] p-4">
      <div className="grid  md:grid-cols-2">
        {/* photographer credits */}
        <div className="grid grid-cols-[15%,85%] justify-center items-center gap-2">
          <div className=" h-full justify-start md:flex flex-col items-end pt-3">
            <Avatar>
              <AvatarImage
                className="bg-white"
                src={
                  typeof photogphrDetails?.avatar === "string"
                    ? photogphrDetails.avatar
                    : photogphrDetails?.avatar?.src
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="pt-1">
            <h1 className="text-black">
              {photogphrDetails?.photoghprFirmName}
            </h1>
            <p className="text-black">{photogphrDetails?.description}</p>
            <p className="text-black">
              <span>Address: </span>
              {photogphrDetails?.address}
            </p>
            <p className="text-black">
              <span>Mobile: </span>
              {photogphrDetails?.contactnumber}
            </p>
            <p className="break-all whitespace-normal text-text-black">
              <span>Email: </span>
              {photogphrDetails?.email}
            </p>
            <div className="flex justify-start items-start gap-3 flex-wrap pt-2">
              <Link href={photogphrDetails?.instagram ?? "#"}>
                <Image
                  src="/images/insta.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[30px]"
                />
              </Link>

              <Link href={photogphrDetails?.facebook ?? "#"}>
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
              <AvatarImage
                className="bg-transparent"
                src={
                  typeof devDetails?.avtar === "string"
                    ? devDetails.avtar
                    : devDetails?.avtar?.src
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="pt-1">
            <h1 className="text-black">{devDetails?.companyName}</h1>
            <p className="text-text-black">{devDetails?.description}</p>
            <p className="text-text-black">
              <span>Address: </span>
              {devDetails?.address}
            </p>
            <p className="text-text-black">
              <span>Mobile: </span>
              {devDetails?.contactnumber}
            </p>
            <p className="break-all whitespace-normal text-text-black">
              <span>Email: </span>
              {devDetails?.email}
            </p>
            <p className="break-all whitespace-normal text-text-black">
              <span>Music: </span>
              {devDetails?.aiMusic}
            </p>
            <div className="flex justify-start items-start gap-3 flex-wrap pt-2">
              <Link href={devDetails?.instagram ?? "#"}>
                <Image
                  src="/images/insta.png"
                  alt="insta icon"
                  width={15}
                  height={15}
                  className="w-[30px]"
                />
              </Link>

              <Link href={devDetails?.linkedIn ?? "#"}>
                <Image
                  src="/images/linkedIN.png"
                  alt="insta icon"
                  width={13}
                  height={13}
                  className="w-[35px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* rights reserved */}
      </div>
      <div className="flex justify-center items-center w-full">
        <p className="text-black">All Rights Reserved</p>
        <CopyrightIcon className="h-[8px] w-[8px] text-black" />
      </div>
    </div>
  );
};
