import alto from "../assets/alto-holding.png"
import cosweirdos from "../assets/cosweirdos.png"
import sebil from "../assets/sebil-insaat.png"
import titbas from "../assets/titbas.png"
import skec from "../assets/skec.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: cosweirdos,
      demo: "https://cosweirdos-frontend.vercel.app",
    },
    {
      id: 2,
      src: alto,
      demo: "https://altoholding.kumsal.agency",
    },
    {
      id: 3,
      src: sebil,
      demo: "https://sebil-insaat.kumsal.agency",
    },
    {
      id: 4,
      src: titbas,
      demo: "https://titbas.kumsal.agency",
    },
    {
      id: 5,
      src: skec,
      demo: "https://skec.ist",
    }
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 px-12 sm:px-0">
          {projects.map(({ id, src, tags, demo, code }) => (
            <a href={demo} target="_blank" rel="noreferrer" key={id} className="shadow-md shadow-gray-600 overflow-hidden rounded-lg flex flex-col gap-y-3">
              <img
                src={src}
                alt="project img"
                className="rounded-md duration-200 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
