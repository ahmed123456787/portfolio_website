import Topbar from "./Topbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--bgcolor)]">
      <Topbar />
      <div className="flex flex-col w-full h-full px-4 sm:px-8 md:px-24 py-4 pt-20">
        <div className="pt-20 px-4 sm:px-8 md:px-12">
          <Hero />
          <div className="mt-5 w-full h-[0.1px] bg-[var(--textcolor)] opacity-50" />
        </div>
        <div className="pt-12 px-4 sm:px-8 md:px-20">
          <About />
          <div className="mt-5 w-full h-[0.1px] bg-[var(--textcolor)] opacity-50" />
        </div>
        <div className="pt-12 px-4 sm:px-8 md:px-20">
          <Skills />
          <div className="mt-16 w-full h-[0.1px] bg-[var(--textcolor)] opacity-50" />
        </div>
        <div className="px-4 sm:px-8 md:px-20">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Layout;
