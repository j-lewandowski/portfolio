import React from "react";
import { useParams } from "react-router-dom";

function ProjectPage({ projects }) {
    const { id } = useParams;

    return (
        <div className="h-screen">
            <div className="p-16 pt-32 flex flex-col items-center h-full">
                <div>{/* slider here */}</div>
                <div>{/* breif desc */}</div>
                <div>{/* main desc */}</div>
                <div>{/* slider here */}</div>
            </div>
        </div>
    );
}

export default ProjectPage;
