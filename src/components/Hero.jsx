import React from "react";
import heroImg from "../assets/heroImg.png";
import { motion } from "motion/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      id="hero"
      className="px-6 md:px-16 flex min-h-screen w-full items-center justify-center py-28"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-white">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-4 text-center"
        >
          <h1 className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 md:text-7xl">
            Pathum Gamage
          </h1>
          <h3 className="bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text text-transparent opacity-80 text-2xl font-semibold transition-all duration-300 hover:opacity-100 md:text-3xl">
            Software Engineer Intern
          </h3>
          <ul className="flex justify-center gap-5 mt-5">
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pathumgamage2018@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pathum-gamage-868149296/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Pathumkavinda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-orange-500 transition-all duration-300 text-3xl"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-4 text-gray-300 leading-relaxed">
            <p className="text-sm md:text-base">
              I am a passionate Software Engineering graduate from ICBT Campus
              with a strong interest in building intelligent and scalable software solutions.
              I have completed my BSc (Hons) in Software Engineering, and my academic journey
              has helped me develop strong analytical and problem-solving skills. I enjoy
              exploring modern technologies and applying them to solve real-world problems.
            </p>
            <p className="text-sm md:text-base">
              Through university projects and personal learning, I have gained experience
              in full-stack development, API integration, and building intelligent systems.
              I have worked with technologies such as Java, JavaScript, React, Next.js,
              Node.js, Python, and MySQL. Recently, I have been developing
              an AI-based Crop Recommendation System that helps farmers choose suitable
              crops using machine learning and agricultural data.
            </p>
            <p className="text-sm md:text-base">
              I am passionate about continuous learning and innovation, particularly in
              Artificial Intelligence, data analysis, and modern web development. My goal
              is to contribute to impactful technology solutions while growing as a
              professional software engineer.
            </p>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex items-center justify-center"
        >
          <img
            src={heroImg}
            alt="Pathum Gamage"
            className="w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

      </div>
    </div>
  );
}
