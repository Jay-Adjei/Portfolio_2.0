import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import About from '@/components/About'
import RecentProjects from '@/components/RecentProjects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center 
      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[{name: 'Home', link:'/', icon: <FaHome />},{name: 'About', link: '#About',}]}/>
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
      </div>
      <Footer />
    </main>
  );
}
