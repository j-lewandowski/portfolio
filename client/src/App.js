import Navbar from "./components/navbar/Navbar";
import AboutMe from "./components/sections/aboutMe/AboutMe";
import Main from "./components/sections/main/Main";
import MyProjects from "./components/sections/myProjects/MyProjects";
import Contact from "./components/sections/contact/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col h-screen">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="h-screen">
                                <Main />
                                <AboutMe />
                                <MyProjects />
                                <Contact />
                            </div>
                        }
                    />
                    <Route path="/my-projects" element={<div>Projekty</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
