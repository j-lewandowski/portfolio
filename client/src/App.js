import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/sections/aboutMe/AboutMe";
import Main from "./components/sections/main/Main";
import MyProjects from "./components/sections/myProjects/MyProjects";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="h-screen">
                <Main />
                <AboutMe />
                <MyProjects />
            </div>
        </div>
    );
}

export default App;
