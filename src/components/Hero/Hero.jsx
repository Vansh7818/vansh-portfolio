import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profileImage from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-28"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-blue-400 text-lg mb-3 font-medium">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Vansh Jain
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Java Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "DSA Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold text-blue-400"
          />

          {/* Summary */}
          <p className="text-gray-300 mt-8 text-lg leading-relaxed max-w-2xl">
            I’m a B.Tech Computer Science student specializing in
            Java, Data Structures & Algorithms, and full-stack web development.
            Passionate about building scalable applications and continuously
            improving problem-solving skills for software engineering roles.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-7 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/20">
              View Projects
            </button>

            <button className="border border-blue-500 hover:bg-blue-500/10 transition duration-300 px-7 py-3 rounded-xl font-medium">
              Download Resume
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/Vansh7818"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vansh-jain-809b442b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/Vansh7818/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
            >
              <SiLeetcode />
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            {/* Glass Card */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">

              <img
                src={profileImage}
                alt="Vansh Jain"
                className="w-[320px] md:w-[380px] rounded-2xl object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;