import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Prestika from "../src/img/prestika.png";
import SupportDesk from "../src/img/supportdesk.png";
import SupportDesk2 from "../src/img/supportdesk2.png";

function App() {
    const projects = [
        {
            id: 1,
            name: "Prestika",
            desc: "Strona internetowa na zamówienie",
            stack: ["React", "Tailwind CSS", "Sanity CMS"],
            imgs: [Prestika],
        },
        {
            id: 2,
            name: "Helpdesk app",
            desc: "Aplikacja helpdesk",
            stack: ["React", "Bootstrap", "Firebase"],
            imgs: [SupportDesk, SupportDesk2],
        },
        // {
        //     name: "House marketplace app",
        //     desc: "Aplikacja do wystawiania nieruchomości",
        // },
    ];

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <ToastContainer />
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
