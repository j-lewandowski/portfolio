import AboutMe from "../components/sections/aboutMe/AboutMe";
import Main from "../components/sections/main/Main";
import MyProjects from "../components/sections/myProjects/MyProjects";
import Contact from "../components/sections/contact/Contact";

function MainPage({ projects }) {
    return (
        <div className="h-screen">
            <Main />
            <AboutMe />
            <MyProjects id="my-projects" projects={projects} />
            <Contact id="contact" />
        </div>
    );
}

export default MainPage;
