import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-24"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 font-medium mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Passionate About Building
            Modern & Scalable Applications
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m Vansh Jain, a B.Tech Computer Science student at
            Parul University currently entering my final year.
            My primary focus is Java, Data Structures & Algorithms,
            and full-stack web development.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I enjoy solving complex problems, designing scalable
            backend systems, and building interactive user experiences
            using modern technologies like React, Node.js, Express,
            MongoDB, and Advanced Java.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Currently, I’m focused on strengthening DSA,
            core computer science subjects, and software engineering
            fundamentals to prepare for internship and placement opportunities.
          </p>

        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >

          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Education
            </h3>

            <p className="text-gray-300 leading-relaxed">
              B.Tech in Computer Science Engineering from
              Parul University, Gujarat.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              DSA Focus
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Consistently practicing Data Structures & Algorithms
              in Java for coding interviews and problem solving.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Development
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Building full-stack applications using MERN stack,
              REST APIs, and Advanced Java technologies.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-blue-500/40 transition duration-300">

            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Career Goal
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Preparing for software engineering internships
              and full-time placement opportunities.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;