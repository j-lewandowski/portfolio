import React from "react";
import ProjectItem from "../components/myprojects/ProjectItem";

import { useNavigate } from "react-router-dom";

function MyProjectsPage({ projects }) {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-24">
            <div className=" p-4 md:p-16 flex flex-col items-center h-full space-y-4 md:space-y-0">
                <div className="w-full float-left">
                    <button
                        className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent mt-4 text-white"
                        onClick={() => navigate("/")}
                    >
                        Cofnij
                    </button>
                </div>
                <label
                    className="text-white text-3xl font-oxygen"
                    data-aos="fade-down"
                >
                    Wszystkie moje projekty
                </label>
                <div className="flex flex-col p-4 md:grid md:grid-cols-3 gap-8 mt-16">
                    {projects.map((project, i) => {
                        return (
                            <ProjectItem
                                name={project.name}
                                stack={project.stack}
                                id={i + 1}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyProjectsPage;
