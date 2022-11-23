import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/650e0507-b3bb-41f9-91ab-7b748ebfae5b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <textarea
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              name="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
