import ProjectItem from "./ProjectItem";

function MyProjects() {
    const projects = [
        {
            name: "Prestika",
            desc: "Strona internetowa na zamówienie",
            stack: ["React", "Tailwind CSS", "Sanity CMS"],
        },
        {
            name: "Helpdesk app",
            desc: "Aplikacja helpdesk",
            stack: ["React", "Bootstrap", "Firebase"],
        },
        // {
        //     name: "House marketplace app",
        //     desc: "Aplikacja do wystawiania nieruchomości",
        // },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col justify-around items-center text-white font-oxygen">
            <p className="text-3xl font-IBM">
                Kilka projektów, nad którymi pracowałem
            </p>
            <div className="grid grid-cols-2 w-full">
                {projects.map((project, i) => {
                    return (
                        <ProjectItem
                            key={i}
                            name={project.name}
                            desc={project.desc}
                            stack={project.stack}
                            id={i}
                        />
                    );
                })}
            </div>
            <button className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent">
                {" "}
                Więcej projektów{" "}
            </button>
        </div>
    );
}

export default MyProjects;
