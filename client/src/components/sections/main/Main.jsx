import Scene from "./Scene";

function Main() {
    return (
        <div className="grid grid-cols-2 h-full">
            <div>
                <Scene />
            </div>
            <div className="text-white font-oxygen text-2xl flex flex-col justify-center">
                <p>
                    Cześć, <br />
                    nazywam się{" "}
                    <label className="font-IBM text-accent">
                        {" "}
                        Jakub Lewandowski
                    </label>
                    .
                </p>
                <p className="text-2xl">Tworzę aplikacje internetowe.</p>
                <p className="text-sm text-gray-400">
                    Jestem full stack developerem specjalizującym się w
                    tworzeniu stron i aplikacji internetowych.
                </p>
            </div>
        </div>
    );
}

export default Main;
