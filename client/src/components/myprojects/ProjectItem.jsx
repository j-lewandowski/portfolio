import React from "react";
import Prestika from "../../img/prestika.png";

function ProjectItem({ stack }) {
    return (
        <div className="w-96 h-72 bg-[#16191c] rounded-lg p-8 flex flex-col space-y-4">
            <img src={Prestika} alt="" />
            <label className="text-white w-full text-center text-xl">
                Prestika
            </label>
            <div className="flex space-x-2 bottom-1 w-full justify-around text-gray-400 font-IBM text-sm">
                {stack.map((item, i) => {
                    return <p key={i}>{item}</p>;
                })}
            </div>
        </div>
    );
}

export default ProjectItem;
