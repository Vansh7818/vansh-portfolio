import { useRef } from "react";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8eon0j",
        "template_x7gwtvc",
        form.current,
        "zsIHoz3Qvyz_FO_DC"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
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
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Let’s Connect &
            Build Something Great
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m currently open to internship opportunities,
            placement drives, collaborative projects,
            and software engineering roles.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Feel free to reach out for technical discussions,
            opportunities, or project collaborations.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">

            <p>
              📧 vanshj7818@gmail.com
            </p>

            <p>
              📍 Gujarat, India
            </p>

          </div>

        </motion.div>

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition duration-300"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition duration-300"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full bg-[#111827] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition duration-300 resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 py-4 rounded-xl font-medium shadow-lg shadow-blue-500/20"
          >

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;