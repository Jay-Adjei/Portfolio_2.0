import {TextRevealCard} from '@/components/ui/TextRevealCard';

const About = () => {
  return (
    <section className='pt-10'>
        <div className='flex flex-col w-full text-center justify-center items-center pb-5'>
        <h1 className='text-2xl font-bold pb-5  z-50'>ABOUT ME</h1>
            <TextRevealCard 
            text='A little background story about me'
            revealText='As a kid i always had a curious mind, but i was most 
            driven towards technology.
            By the age of 16, my tinkering with electronics had morphed 
            into a fascination with how websites and applications tick.
            Now, as a 3rd-year Computer Science student at KNUST, I&apos;m
            constantly honing my skills in Front-End Development to bridge
            the gap between my passion and the job market. '
            />
        </div>
    </section>
  )
}

export default About