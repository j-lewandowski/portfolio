import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/sections/aboutMe/AboutMe";
import Main from "./components/sections/main/Main";
import MyProjects from "./components/sections/myProjects/MyProjects";
import Contact from "./components/sections/contact/Contact";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="h-screen">
                <Main />
                <AboutMe />
                <MyProjects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
