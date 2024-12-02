import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Over the years, I've worked on a range of projects, 
        from developing an e-commerce platform with React and Spring Boot to creating interactive web games with JavaScript. 
        My passion lies in leveraging innovative technologies to build solutions that enhance user experiences.
        </p>

        <br />

        <p className="text-xl">
        I'm also certified in web development and Python/SQL.
         My technical skills are complemented by soft skills such as teamwork, time management, and problem-solving.
         When I'm not coding,I enjoy exploring technology trends, gaming, and following football.
        </p>
      </div>
    </div>
  );
};

export default About;
