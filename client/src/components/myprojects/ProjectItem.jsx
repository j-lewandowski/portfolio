import React from "react";

import { Link } from "react-router-dom";

function ProjectItem({ stack, name, id, img }) {
    return (
        <Link to={`/my-projects/${id}`}>
            <div
                className="md:w-96 w-80 md:h-72 bg-secondary rounded-lg p-8 flex flex-col space-y-4 hover:cursor-pointer"
                data-aos="flip-left"
                data-aos-delay={` ${50 * (id % 3)}`}
                data-aos-offset={` ${50 * (id % 3)}`}
            >
                <img src={img} alt="project-image" />
                <label className="text-white w-full text-center text-xl hover:cursor-pointer">
                    {name}
                </label>
                <div className="flex space-x-2 bottom-1 w-full justify-around text-gray-400 font-IBM text-sm">
                    {stack.map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
            </div>
        </Link>
    );
}

export default ProjectItem;
