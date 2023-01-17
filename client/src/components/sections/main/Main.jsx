import Scene from "./Scene";
import Hero from "../../../img/hero.svg";

function Main() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div id="anim" className="flex justify-center items-center">
                <img src={Hero} />
            </div>
            <div className="text-white font-oxygen text-base md:text-2xl flex flex-col font-bold justify-center items-center">
                <div>
                    <p>
                        Cześć, <br />
                        nazywam się{" "}
                        <label className="font-IBM font-normal text-accent">
                            {" "}
                            Jakub Lewandowski
                        </label>
                        .
                    </p>
                    <p className="md:text-2xl">Tworzę aplikacje internetowe.</p>
                    <p className="md:text-sm text-gray-400">
                        Jestem full stack developerem specjalizującym się w
                        tworzeniu stron i aplikacji internetowych.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
