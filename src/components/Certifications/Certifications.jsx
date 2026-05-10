import { motion } from "framer-motion";

import certifications from "../../data/certifications";

import resumeFile from "../../assets/resume/Vansh_Jain_Resume.pdf";

function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen px-6 md:px-12 py-24"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 font-medium mb-3">
            Resume & Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Continuous Learning &
            Career Preparation
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Alongside development and DSA preparation,
            I continuously focus on improving technical knowledge,
            backend engineering skills, and software development fundamentals.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            My resume includes academic projects,
            technical skills, development experience,
            and placement-focused preparation.
          </p>

          {/* Resume Button */}
          <a
            href={resumeFile}
            download
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 transition duration-300 px-7 py-4 rounded-2xl font-medium shadow-lg shadow-blue-500/20"
          >

            Download Resume

          </a>

        </motion.div>

        {/* RIGHT SIDE */}
        <div className="grid gap-8">

          {certifications.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {certificate.issuer}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {certificate.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;