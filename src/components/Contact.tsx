const Contact = () => {
  return (
    <div className="flex  items-center justify-center w-full py-12 gap-20 text-[var(--textcolor)]">
      <div>
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-center mb-8">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex space-x-1 mb-8 items-center">
          <a
            href="https://github.com/ahmed123456787"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-8 h-8
            "
            />
          </a>
          <a
            href="https://www.linkedin.com/in/zaterahmed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-14 h-14" />
          </a>
        </div>
      </div>

      <form className="flex flex-col w-full max-w-md ">
        <label className="text-[var(--textcolor)] mb-2">Your email</label>
        <input
          type="email"
          placeholder="mikel@gmail.com"
          className="w-full p-2 bg-[#18191E] text-[var(--textcolor)] border border-[var(--bordercolor)] rounded-lg mb-6"
        />
        <label className="text-[var(--textcolor)] mb-2">Subject</label>
        <input
          type="text"
          placeholder="Just say anything"
          className="w-full p-2 bg-[#18191E] text-[var(--textcolor)] border border-[var(--bordercolor)] rounded-lg mb-6"
        />
        <label className="text-[var(--textcolor)] mb-2">Message</label>
        <textarea
          placeholder="lets talk about something"
          className="w-full p-3 bg-[#18191E] text-[var(--textcolor)] border border-[var(--bordercolor)] rounded-lg h-32 mb-6"
        />
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
