import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: ["Ahmed", "Ai Developer", "Full Stack Developer"],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }

    // Cleanup on unmount
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 md:px-12">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="flex flex-col text-center md:text-left">
          <p className="text-[var(--redcolor)] text-4xl font-bold">
            Hello, I'm
          </p>

          <div className="text-[var(--textcolor)] text-4xl font-semibold">
            <span ref={typedElement}></span>
          </div>

          <p className="pt-6 text-xl text-slate-400 leading-relaxed">
            Software engineering student here, loving full-stack and mobile
            development! I'm all about learning new tech and building cool apps
            with others.
          </p>

          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            <button className="text-[var(--textcolor)] bg-[var(--redcolor)] px-8 py-3 rounded-4xl hover:bg-red-600 transition duration-300">
              Hire me
            </button>
            <button className="text-[var(--textcolor)] px-8 py-3 rounded-4xl border-[var(--redcolor)] border-4 hover:bg-[var(--redcolor)] transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        <img
          src="profile.png"
          alt="Profile"
          className="w-2/3 md:w-1/5 h-auto rounded-full bg-[var(--bgimage)] bg-opacity-80 backdrop-blur-md shadow-lg mt-8 md:mt-0"
        />
      </div>

      {/* Add custom CSS to ensure cursor visibility */}
      <style>{`
        .typed-cursor {
          opacity: 1;
          animation: typedjsBlink 0.7s infinite;
          color: var(--textcolor); /* Match text color */
          font-size: 2.25rem; /* Match text size (text-4xl) */
        }

        @keyframes typedjsBlink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
// export default Hero;
