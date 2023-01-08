import ProjectItem from "./ProjectItem";

function MyProjects() {
    const projects = [
        {
            name: "Prestika",
            desc: "Strona internetowa na zamówienie",
        },
        {
            name: "Helpdesk app",
            desc: "Aplikacja helpdesk",
        },
        {
            name: "House marketplace app",
            desc: "Aplikacja do wystawiania nieruchomości",
        },
    ];

    return (
        <div className="min-h-screen w-full flex flex-col justify-start items-center text-white font-oxygen">
            <p className="text-3xl font-IBM">
                Kilka projektów, nad którymi pracowałem
            </p>
            <div className="flex flex-col">
                {projects.map((project, i) => {
                    <ProjectItem
                        key={i}
                        name={project.name}
                        desc={project.desc}
                    />;
                })}
            </div>
        </div>
    );
}

export default MyProjects;
