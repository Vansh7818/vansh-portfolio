import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profiles from "../../data/profiles";

function CodingProfiles() {

  const getIcon = (platform) => {

    switch (platform) {

      case "GitHub":
        return <FaGithub size={32} />;

      case "LeetCode":
        return <SiLeetcode size={32} />;

      default:
        return null;
    }
  };

  return (
    <section
      id="coding"
      className="min-h-screen px-6 md:px-12 py-24"
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
            Coding Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Strengthening Problem Solving &
            Software Engineering Skills
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I consistently practice Data Structures & Algorithms
            in Java to improve problem-solving abilities,
            coding interview preparation, and software engineering fundamentals.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Alongside development, I actively focus on
            core computer science subjects including DBMS,
            Operating Systems, Computer Networks,
            and Software Engineering concepts.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I believe consistent coding practice and strong
            fundamentals are essential for building scalable
            and efficient software systems.
          </p>

        </motion.div>

        {/* RIGHT CARDS */}
        <div className="grid gap-8">

          {profiles.map((profile, index) => (

            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
            >

              {/* Header */}
              <div className="flex items-center gap-5 mb-6">

                <div className="text-blue-400">
                  {getIcon(profile.platform)}
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    {profile.platform}
                  </h3>

                  <p className="text-gray-400">
                    @{profile.username}
                  </p>

                </div>

              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {profile.description}
              </p>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CodingProfiles;