import React from "react";
import { FaBrain, FaUsers, FaRobot } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          About  Us
        </h1>
        <p className="text-lg text-base-content">
          AI Resume Maker empowers job seekers with smart resume creation through intelligent automation and beautiful design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card bg-base-100 shadow-xl border border-base-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary text-white p-4 rounded-full text-3xl">
              <FaBrain />
            </div>
          </div>
          <h2 className="card-title mb-2 justify-center">AI-Powered</h2>
          <p className="text-base-content">
            Our platform leverages advanced AI to transform your description into a polished, professional resume in seconds.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary text-white p-4 rounded-full text-3xl">
              <FaUsers />
            </div>
          </div>
          <h2 className="card-title mb-2 justify-center">User-Centric</h2>
          <p className="text-base-content">
            Built with you in mind—whether you're a fresher or seasoned pro, creating a resume is quick, easy, and intuitive.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-accent text-white p-4 rounded-full text-3xl">
              <FaRobot />
            </div>
          </div>
          <h2 className="card-title mb-2 justify-center">Smart & Intuitive</h2>
          <p className="text-base-content">
            Our smart layout engine and real-time AI suggestions ensure your resume looks great and reads better.
          </p>
        </div>
      </div>

      <div className="bg-base-200 rounded-xl p-8">
        <h3 className="text-3xl font-semibold mb-4 text-center">Our Mission</h3>
        <p className="text-base-content text-lg text-center max-w-3xl mx-auto">
          To make resume building effortless and intelligent for everyone. We combine the power of AI with a beautifully simple interface, enabling job seekers to tell their stories effectively.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

// import React from 'react'

// function About() {
//   return (
//     <div>
//       about
//     </div>
//   )
// }

// export default About
