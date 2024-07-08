'use client'

import { useState, useRef, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";

import { cn } from "@/utils/cn";
import { images } from "@/data/images";


import { BackgroundGradientAnimation } from "./GradientBg";
import {GlobeDemo} from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import {
    SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiMongodb
} from "react-icons/si";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const textWidthRef = useRef(null);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "mr.adjei17@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false),3000)
  };

  const StackName =({logoName}:{logoName:string}) =>{
    return (
    <div className='border border-white/[0.1] rounded-lg relative top-0'>
      <p className='font-serif text-xl text-center'>{logoName}</p>
    </div>
    )
  }
  const [hoveredLogo, setHoveredLogo] = useState('');
  
  const handleMouseEnter = ({logoName}:{logoName:string}) => {
    setHoveredLogo(logoName);
  };

  const handleMouseLeave = () => {
    setHoveredLogo('');
  };

  useEffect(() => {
    if (textWidthRef.current) { // Check within useEffect
      const textWidth = textWidthRef.current.clientWidth;
      textWidthRef.current.style.width = `${textWidth}px`;
    }
  }, [hoveredLogo]);

  const icons = [
    { name: 'HTML', icon: <SiHtml5 size={35} onMouseEnter={() => handleMouseEnter('HTML')} onMouseLeave={handleMouseLeave} /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss onMouseEnter={() => handleMouseEnter('TailwindCSS')} onMouseLeave={handleMouseLeave} size={35} /> },
    { name: 'JavaScript', icon: <SiJavascript size={35} onMouseEnter={() => handleMouseEnter('JavaScript')} onMouseLeave={handleMouseLeave} /> },
    { name: 'TypeScript', icon: <SiTypescript size={35} onMouseEnter={() => handleMouseEnter('TypeScript')} onMouseLeave={handleMouseLeave} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={35} onMouseEnter={() => handleMouseEnter('Node.js')} onMouseLeave={handleMouseLeave} /> },
    { name: 'React', icon: <SiReact size={35} onMouseEnter={() => handleMouseEnter('React')} onMouseLeave={handleMouseLeave} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={35} onMouseEnter={() => handleMouseEnter('Next.js')} onMouseLeave={handleMouseLeave} /> },
    { name: 'MongoDB', icon: <SiMongodb size={35} onMouseEnter={() => handleMouseEnter('MongoDB')} onMouseLeave={handleMouseLeave} /> },
  ];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(22,19,70)',
        backgroundColor: 'linear-gradient(90deg, rgba(22,19,70,1) 0%, rgba(15,15,33,1) 35%, rgba(31,1,64,1) 100%)',
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg max-w-96 lg:text-3xl font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className='grid grid-cols-4 grid-rows-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-2 lg:pr-3 absolute right-16 lg:right-4 xl:top-[30%]'>
            {icons.map((item) => (
              <div key={item.name} className='relative w-full z-50'> {/* Added relative for positioning */}
                {item.icon}
                {hoveredLogo === item.name && (
                  <span
                  className='flex fex-1 items-center absolute bg-[#000319] border border-white/[0.1] text-white lg:right-2 p-1 px-2 rounded-md -top-10 overflow-hidden'
                  ref={textWidthRef}
                >
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
)}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline/>}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
