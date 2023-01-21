import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
    const projects = [
        {
            name: "Prestika",
            desc: "Strona internetowa na zamówienie",
            stack: ["React", "Tailwind CSS", "Sanity CMS"],
            img: "../../../img/prestika.png",
        },
        {
            name: "Helpdesk app",
            desc: "Aplikacja helpdesk",
            stack: ["React", "Bootstrap", "Firebase"],
            img: "../../../img/prestika.png",
        },
        // {
        //     name: "House marketplace app",
        //     desc: "Aplikacja do wystawiania nieruchomości",
        // },
    ];

    return (
        <BrowserRouter>
            <div className="flex flex-col h-screen">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage projects={projects} />}
                    />
                    <Route
                        path="/my-projects"
                        element={<MyProjectsPage projects={projects} />}
                    />
                    <Route
                        path="/my-projects/:id"
                        element={<ProjectPage projects={projects} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
