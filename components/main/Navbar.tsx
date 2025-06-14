import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#030014a2] backdrop-blur-md z-50 px-4">
      <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto"
        >
          <span className="text-lg lg:text-2xl font-bold ml-[10px] text-gray-300">
            Jeanne <span className="font-light">Bergrat</span>
          </span>
        </a>

        <div className="hidden w-[400px] h-full lg:flex lg:flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[40px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
