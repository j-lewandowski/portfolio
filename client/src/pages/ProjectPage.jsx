import React from "react";
import { useParams } from "react-router-dom";

import { Carousel } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import Prestika from "../img/prestika.png";

function ProjectPage({ projects }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = projects.filter((project) => project.id == id)[0];

    return (
        <div className="h-screen w-screen flex items-center">
            <div className="md:px-72 pb-8 pt-32 flex flex-col items-center h-full space-y-4 ">
                <div className="w-full float-left">
                    <button
                        className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent mt-4 text-white"
                        onClick={() => navigate("/my-projects")}
                    >
                        Cofnij
                    </button>
                </div>
                <div className="bg-[#16191c] p-8 rounded-xl h-screen w-full flex flex-col items-center space-y-12">
                    <div className="h-[800px] w-[80%]">
                        <Carousel>
                            <img src={Prestika} />
                            <img src={Prestika} />
                        </Carousel>
                    </div>
                    <div className="grid grid-cols-2 text-white w-full">
                        <span className="font-oxygen text-xl text-center">
                            {data.name}
                        </span>
                        <div className="flex text-center items-center">
                            <span className="text-white font-IBM text-sm mr-4">
                                Technologie:
                            </span>
                            <div className="flex bottom-1 w-full space-x-4 items-center text-gray-400 font-IBM text-sm">
                                {data.stack.map((item, i) => {
                                    return <p key={i}>{item},</p>;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="h-1 bg-white w-[90%] rounded-lg"></div>
                    <div className="flex flex-col float-left w-full text-white space-y-4 px-64">
                        <span className="font-IBM text-2xl text-accent">
                            Opis
                        </span>
                        <main className="font-oxygen text-xl">
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
                {/* <div className="bg-[#16191c] p-8 rounded-xl h-screen w-full flex flex-col items-center space-y-12"></div> */}
            </div>
        </div>
    );
}

export default ProjectPage;