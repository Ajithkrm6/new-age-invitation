import React from "react";
import Image from "next/image";

export const ImageLayer = () => {
  return (
    <div className="p-4 flex w-full h-full bg-yellow  justify-center items-center">
      <div className="w-[90%] h-[90%] flex justify-center items-center">
        <Image
          alt="couple"
          src="/images/G&B1.jpg" // Corrected the path from 'imgaes' to 'images'
          width={300}
          height={500}
          className="object-cover w-[600px] rounded-md" // Ensures the image covers the container without distortion
        />
      </div>
    </div>
  );
};
