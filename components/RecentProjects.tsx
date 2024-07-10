import {projects} from '@/data/index';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        {/* <CardDemo /> */}
        <div className='relative flex flex-wrap items-center justify-center p-4
            gap-16 max-lg:gap-y-2 mt-10'>
            {projects.map((project) => (
                <CardContainer key={project.id} className='min-h-[30.5rem]
                flex  sm:w-[550px] w-[80vw] border border-white/[0.1] rounded-xl shadow-2x'>
                        <CardBody className='w-full'>
                            <CardItem as='h2' translateZ='50' className='text-xl font-semibold px-3'>
                                {project.title}
                            </CardItem>
                            <CardItem as='p' translateZ='60' className='text-sm px-3 pb-5 pt-3'>
                                {project.des}
                            </CardItem>
                            <CardItem translateZ='80' className='w-full flex justify-center bg-[#13162D] rounded-xl overflow-hidden px-2'>
                                <Image 
                                    src={project.img}
                                    height={450}
                                    width={360}
                                    alt='some image'
                                    className='origin-top-left rotate-12 rounded-lg'
                                    />
                            </CardItem>
                            <div className={`flex -gap-2 ${project.iconLists? 'justify-around' : 'justify-center'} items-center m-0 pt-14`}>
                            {project.iconLists && (
                                <CardItem translateZ='60' className='flex pl-3 '>
                                {project.iconLists.map((icon, index) => (
                                    <div key={icon} className={`flex items-center justify-center border border-gray-500 rounded-full object-contain bg-gradient-to-r from-black via-black-200 to-black relative -left-${index * 3} [index+5]`}
                                    style={{ transform: `translateX(-${2+index * 8}px)` }} >
                                    <Image
                                    src={icon}
                                    height={20}
                                    width={20}
                                    alt='some image'
                                    className='m-2 object-contain'
                                    />
                                    </div>
                                ))}
                            </CardItem>
                            )}
                            <CardItem as={Link} translateZ='60' href={project.link} target='__blank' className={`flex relative right-3 shadow-xl text-sm bg-white text-black rounded-xl mx-auto p-3 pr-3 m-${project.iconLists? '0' : 'auto'}`}>
                                Check out my code
                                <FaArrowRightLong className='pl-2' size={20}/>
                            </CardItem>
                            </div>
                        </CardBody>
                </CardContainer>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects