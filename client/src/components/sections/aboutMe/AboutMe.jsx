import TechItem from "./TechItem";

function AboutMe() {
    const technologies = [
        {
            name: "React",
            icon: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
        },
        {
            name: "JavaScript",
            icon: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
        },
        {
            name: "TypeScript",
            icon: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
        },
        {
            name: "Node.js",
            icon: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
        },
        {
            name: "Express",
            icon: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
        },
        {
            name: "Redux",
            icon: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
        },
        {
            name: "mongoDB",
            icon: "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png",
        },
        {
            name: "Tailwind CSS",
            icon: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
        },
        {
            name: "Firebase",
            icon: "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png",
        },
    ];

    return (
        <div
            className=" min-h-screen w-screen flex flex-col justify-center items-center md:grid md:grid-cols-2 font-oxygen text-white"
            id="about-me"
        >
            <div
                className="w-full p-8 px-16 items-center justify-center space-y-12 text-center"
                data-aos="fade-right"
            >
                <p className="text-xl md:text-2xl font-bold">O mnie</p>
                <p className=" md:text-xl text-justify md:px-16">
                    Cześć! Nazywam się Jakub Lewandowski i jestem studentem II
                    roku informatyki na{" "}
                    <a
                        className="text-accent hover:underline"
                        href="https://cdv.pl/"
                    >
                        Collegium Da Vinci
                    </a>{" "}
                    w Poznaniu, który pasjonuje się Full Stack Developmentem.
                    Tworzeniem aplikacji internetowych zainteresowałem się kilka
                    lat temu. Od tego czasu zdążyłem popracować nad kilkoma
                    poważniejszymi projektami z wykorzystaniem różnych
                    technologii.
                </p>
            </div>
            <div className="w-full p-4 md:pd-0">
                <p className="text-2xl font-bold font-IBM">Technologie</p>
                <div className="w-full flex items-center justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-4 h-auto py-4 w-fit">
                        {technologies.map((technology, i) => {
                            return (
                                <div
                                    className="flex items-center justify-center"
                                    key={i}
                                >
                                    <TechItem
                                        icon={technology.icon}
                                        name={technology.name}
                                        id={i}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
