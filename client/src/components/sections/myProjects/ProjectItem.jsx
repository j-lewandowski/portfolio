import Prestika from "../../..//img/prestika.png";

import { Link } from "react-router-dom";

function ProjectItem({ name, desc, stack, img, id }) {
    return (
        <Link to={`/my-projects/${id + 1}`}>
            <div className="flex items-center justify-around flex-col relative  md:-translate-x-[10%] hover:cursor-pointer">
                <div
                    className="h-80 md:w-96 md:h-64 bg-[#16191c] relative -z-10 rounded-md md:rounded-none"
                    data-aos={`fade-${id % 2 === 0 ? "right" : "left"}`}
                >
                    <div className="p-4 md:pr-32 space-y-4">
                        <p className="font-IBM">{name}</p>
                        <p>{desc}</p>
                    </div>
                    <img
                        src={Prestika}
                        className="p-4 block md:hidden"
                        alt={`ProjectPhoto${id}`}
                    />
                    <div className="flex space-x-2 absolute bottom-3 w-full justify-around text-gray-400 font-IBM text-sm">
                        {stack.map((item, i) => {
                            return <p key={i}>{item}</p>;
                        })}
                    </div>
                    <div
                        className={`hidden md:block w-96 h-64 absolute z-10 bg-${
                            id === 0 ? "prestika" : "supportdesk"
                        } -top-28 left-48 bg-no-repeat bg-cover bg-center outline-2 outline-accent`}
                    />
                </div>
            </div>
        </Link>
    );
}

export default ProjectItem;
