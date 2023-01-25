import Hero from "../../../img/hero.svg";
function Main() {
    return (
        <div
            className="flex flex-col items-center space-y-8 tracking-wide justify-center md:grid md:grid-cols-2 mt-32 md:mt-0 h-screen w-screen p-8 md:p-0"
            id="hero"
        >
            <div
                id="anim"
                className=" justify-center items-center flex"
                data-aos="fade-up-right"
            >
                <img src={Hero} alt="hero" />
            </div>
            <div
                className="text-white font-oxygen text-base md:text-2xl flex flex-col font-bold justify-center items-center"
                data-aos="fade-up-left"
            >
                <div>
                    <p>
                        Cześć, <br />
                        nazywam się
                        <span className="font-IBM font-normal text-accent">
                            {" "}
                            Jakub Lewandowski
                        </span>
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
