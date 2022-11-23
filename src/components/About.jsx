import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          A year experience in frontend development, interested in writing
          codes, skilled at developing complex solutions, creating responsive
          designs, possessing strong creative thinking skills and high energy.
          Ability to create algorithms effectively, and interact positively and
          communicate appropriately with team members. Quickly grasp new
          technologies and concepts to develop innovative and creative solutions
          to problems. Always open to learning, eager to learn various
          technologies, tools and libraries.
        </p>
        <br />
        <p className="text-xl">
          Especially interested in Front end/Web Development, HTML, CSS, JS,
          ReactJS. Excited to learn new things and improve as a lifetime student.
        </p>
      </div>
    </div>
  );
};

export default About;
