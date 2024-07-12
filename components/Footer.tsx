"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const icons = [
  {name:'Github', icon:<SiGithub size={25}/>},
  {name:'Linkedin', icon:<FaLinkedin size={25}/>},
]

const Footer=()=> {
  return (
    <div className="h-[24rem] sm:h-[25rem] md:h-[27rem] lg:h-[30rem] w-screen inset-0 top-0 left-0 rounded-md relative flex flex-col text-center items-center antialiased z-50">
      <h2 className='mb-10 text-left text-[5.4rem] font-bold tracking-wide leading-[0.9em] text-[#e4ded7] max-sm:text-[30px] sm:text-[45px] md:mb-16 md:text-[8rem] lg:text-[12rem]  pt-5'>CONTACT</h2>
        <p className="max-w-[45rem] max-sm:max-w-[20rem] sm:max-w-[35rem] pb-10">Do you have a project you want to collaborate on?, reach out to me today and let&apos;s see how best i can help you achieve your goal. </p>
        <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow />} position='right' widthClass="w-[20rem] lg:w-[25rem]" marginClass=""/>
        <div className=" flex absolute bottom-10 md:bottom-2 lg:bottom-3 justify-between lg:gap-10">
          <p>@JAPHETADJEI <span className="text-xs max-sm:pr-10">2024</span></p>
          <div className="flex gap-4">
            {icons.map((item) => (
              <div key={item.name}> 
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      <BackgroundBeams />
    </div>
  );
}

export default Footer;