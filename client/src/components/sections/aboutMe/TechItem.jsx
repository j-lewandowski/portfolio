import React from "react";

function TechItem({ icon, name, id }) {
    return (
        <div
            className="w-32 h-32 bg-[#16191c] flex flex-col justify-around items-center rounded-lg group transition-all duration-150 ease-in-out"
            data-aos="flip-up"
            data-aos-offset={` ${50 * (id % 3)}`}
        >
            <img
                src={icon}
                alt="Technology icon"
                className="h-16 w-16 duration-150 ease-in-out"
            />
            {/* <p className="font-IBM invisible group-hover:visible text-accent duration-150 ease-in-out">
                {name}
            </p> */}
        </div>
    );
}

export default TechItem;
