import { FaCode } from "react-icons/fa6";
const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[var(--bgcolor)] bg-opacity-80 backdrop-blur-md z-50">
      <div className="flex flex-col sm:flex-row items-center justify-between text-white p-4 sm:p-10 pb-4">
        <FaCode className="w-8 h-8 text-[var(--redcolor)]" />
        <div className="flex items-center gap-4 sm:gap-7 text-[var(--textcolor)] mt-4 sm:mt-0">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[var(--textcolor)] opacity-50" />
    </div>
  );
};

export default Topbar;
