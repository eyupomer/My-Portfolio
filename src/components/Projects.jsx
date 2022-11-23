import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import joker from "../assets/joker.png";
import movie from "../assets/Movie.png";
import security from "../assets/security.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: instagram,
      tags: ["ReactJS", "Tailwind CSS"],
      demo: "http://react-js-tailwind-css-instagram-clone.vercel.app/",
      code: "https://github.com/eyupomer/ReactJS-TailwindCSS-Instagram-Clone"
    },
    {
      id: 2,
      src: twitter,
      tags: ["ReactJS", "Tailwind CSS", "Firebase"],
      demo: "http://react-js-tailwind-css-twitter.vercel.app/",
      code: "https://github.com/eyupomer/ReactJS-TailwindCSS-Twitter"
    },
    {
      id: 3,
      src: movie,
      tags: ["ReactJS", "Bootstrap", "Firebase", "Axios"],
      demo: "http://react-bootstrap-movie-app.vercel.app/",
      code: "https://github.com/eyupomer/React-Bootstrap-Movie-App"
    },
    {
      id: 4,
      src: joker,
      tags: ["ReactTS", "Styled Components", "Axios"],
      demo: "http://react-ts-styled-component-joker.vercel.app/",
      code: "https://github.com/eyupomer/ReactTS-StyledComponent-Joker"
    },
    {
      id: 5,
      src: security,
      tags: ["ReactJS", "Styled Components"],
      demo: "https://react-styled-components-website.vercel.app/",
      code: "https://github.com/eyupomer/React-StyledComponents-Website"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, tags, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col gap-y-3">
              <img
                src={src}
                alt="project img"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-around border-b-2 py-2 border-gray-500">
                {tags.map((tag) => (
                  <p className="bg-gradient-to-b from-gray-900 to-gray-400 cursor-default px-1 text-center rounded-sm">{tag}</p>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-6 mx-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
