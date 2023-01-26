import React from "react";
import { useParams } from "react-router-dom";

import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function ProjectPage({ projects }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = projects.filter(
        (project) => parseInt(project.id) === parseInt(id)
    )[0];

    return (
        <div className="min-h-screen w-screen flex items-center">
            <div className="p-4 md:px-72 pb-16 pt-32 flex flex-col items-center h-full w-full space-y-4 ">
                <div className="w-full float-left">
                    <button
                        className="p-4 bg-secondary rounded-md font-IBM hover:text-accent mt-4 text-white"
                        onClick={() => navigate("/my-projects")}
                    >
                        Cofnij
                    </button>
                </div>
                <div className="bg-secondary p-8 rounded-xl min-h-screen h-full w-full flex flex-col items-center space-y-6 md:space-y-12">
                    <div className="h-[300px] w-[320px] md:h-[700px] md:w-[900px]">
                        <Carousel>
                            {data.imgs.map((img, i) => {
                                return <img src={img} key={i} alt={i} />;
                            })}
                        </Carousel>
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 text-white w-full space-y-4 md:space-y-0">
                        <span className="font-oxygen text-2xl text-center">
                            {data.name}
                        </span>
                        <div className="flex md:flex-row flex-col text-center space-y-1 md:space-y-0 md:items-center items-start">
                            <span className="text-white font-IBM text-sm md:text-sm mr-4">
                                Technologie:
                            </span>
                            <div className="flex md:flex-row flex-col bottom-1 w-full space-y-1 md:space-x-4 md:space-y-0 items-start md:items-center text-gray-400 font-IBM text-xs md:text-sm">
                                {data.stack.map((item, i) => {
                                    return <p key={i}>{item},</p>;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="h-1 bg-white w-[90%] rounded-lg"></div>
                    <div className="flex flex-col float-left w-full text-white space-y-4 md:px-64">
                        <span className="font-IBM text-2xl text-accent">
                            Opis
                        </span>
                        <main className="font-oxygen md:text-xl">
                            Jest to landing page sklepu z zabudowami
                            przysznicowymi stworzona w pełni przeze mnie na
                            zamówienie. Strona połączona jest z systemem CMS
                            Sanity, który powzwala na zarządzanie tekstem i
                            zdjęciami, które znajduje się na stronie oraz
                            rozbudowana o możliwość dodania nowych produktów w
                            przyszłości.
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
