import React from "react";

function TechItem({ icon, name }) {
    return (
        <div className="w-32 h-32 bg-[#16191c] flex flex-col justify-around items-center rounded-lg">
            <img src={icon} alt="Technology icon" className="h-16 w-16" />
            <p className="font-IBM">{name}</p>
        </div>
    );
}

export default TechItem;
