import React from "react";

function TechItem({ icon, name }) {
    return (
        <div className="w-32 h-32 bg-[#16191c] flex flex-col justify-around items-center rounded-lg group transition-all duration-150 ease-in-out">
            <img
                src={icon}
                alt="Technology icon"
                className="h-16 w-16 z-0 grayscale group-hover:grayscale-0 duration-150 ease-in-out"
            />
            <p className="font-IBM invisible group-hover:visible text-accent duration-150 ease-in-out">
                {name}
            </p>
        </div>
    );
}

export default TechItem;
