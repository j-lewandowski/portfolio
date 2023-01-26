import AboutMe from "../components/sections/aboutMe/AboutMe";
import Main from "../components/sections/main/Main";
import MyProjects from "../components/sections/myProjects/MyProjects";
import Calculator from "../components/calculator/Calculator";
import Contact from "../components/sections/contact/Contact";

function MainPage({ projects }) {
    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <Main />
            <AboutMe />
            <MyProjects id="my-projects" projects={projects} />
            <Calculator />
            <Contact id="contact" />
        </div>
    );
}

export default MainPage;
