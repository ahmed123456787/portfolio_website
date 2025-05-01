const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 md:px-12">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="flex flex-col text-center md:text-left">
          <p className="text-red-400 text-4xl font-bold">Hello, I'm</p>
          <p className="text-white text-4xl font-semibold">Mobile Developer</p>
          <p className="pt-6 text-xl text-slate-400 leading-relaxed">
            Software engineering student here, loving full-stack and mobile
            development! I'm all about learning new tech and building cool apps
            with others.
          </p>
          <div className="flex gap-4 pt-6 justify-center md:justify-start">
            <button className="text-white bg-red-500 px-8 py-3 rounded-4xl hover:bg-red-600 transition duration-300">
              Hire me
            </button>
            <button className="text-white px-8 py-3 rounded-4xl border-red-600 border-4 hover:bg-red-500 transition duration-300">
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
    </div>
  );
};

export default Hero;
