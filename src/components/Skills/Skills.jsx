import { motion } from "framer-motion";

import skills from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-12 py-24"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-blue-400 font-medium mb-3">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies & Tools
          </h2>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
            >

              {/* Category */}
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {skill.category}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">

                {skill.technologies.map((tech, techIndex) => (

                  <span
                    key={techIndex}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-gray-200 hover:bg-blue-500/20 transition duration-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;