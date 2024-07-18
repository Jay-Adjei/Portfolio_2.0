import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <IoHome color="white" /> },
            { name: "About", link: "#about" },
            { name: "Project", link: "#recentProjects" },
            { name: "Contact", link: "#footer" },
          ]}
          className="hidden lg:inline-flex"
        />
        <Hero />
        <div className="m-0 p-0" id="about">
          <About />
          <Grid />
        </div>
        <div className="m-0 p-0" id="recentProjects">
          <RecentProjects />
        </div>
      </div>
      <div className="m-0 p-0" id="footer">
        <Footer />
      </div>
    </main>
  );
}
