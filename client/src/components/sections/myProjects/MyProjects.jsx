import ProjectItem from "./ProjectItem";
import { useNavigate } from "react-router-dom";

function MyProjects({ projects }) {
    const navigate = useNavigate();

    return (
        <div
            className="md:pt-36 min-h-screen w-full flex flex-col space-y-4 justify-around items-center text-white font-oxygen"
            id="my-projects"
        >
            <p
                className="text-xl text-center md:text-3xl font-IBM"
                data-aos="fade-down"
            >
                Kilka projektów, nad którymi pracowałem
            </p>
            <div className="flex flex-col justify-around items-center px-4 space-y-8 md:space-y-0 md:grid md:grid-cols-2 w-full">
                {projects.map((project, i) => {
                    return (
                        <ProjectItem
                            key={i}
                            name={project.name}
                            desc={project.desc}
                            stack={project.stack}
                            img={project.img}
                            id={i}
                        />
                    );
                })}
            </div>

            <button
                className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent"
                onClick={() => navigate("/my-projects")}
                data-aos="fade-up"
            >
                Więcej projektów
            </button>
        </div>
    );
}

export default MyProjects;
