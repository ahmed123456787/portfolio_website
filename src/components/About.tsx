const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 px-4 sm:px-8 md:px-12">
      <img
        src="about-me.png"
        alt="about me"
        className="w-full md:w-1/3 h-auto rounded-lg shadow-lg mt-4 md:mt-12"
      />
      <div className="flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-4">About Me</h2>
        <p className="text-white leading-relaxed">
          I am a dedicated Software Engineering student with a passion for
          full-stack and mobile development. My technical skill set includes
          expertise in MongoDB, Express.js, React, Node.js, React Native,
          Firebase, MySQL, Java Swing, Python, and Next.js.
        </p>
        <p className="text-white leading-relaxed mt-4">
          I thrive on bringing projects to life through code, utilizing Git and
          GitHub for efficient version control and collaboration. I am a quick
          learner and always looking to expand my knowledge and skill set.
        </p>
        <p className="text-white leading-relaxed mt-4">
          As a team player, I am excited to work with others to create amazing
          applications. My hands-on experience in developing dynamic
          applications and robust backend systems equips me with the versatility
          and problem-solving capabilities to tackle diverse challenges in the
          tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
