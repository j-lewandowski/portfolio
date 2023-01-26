import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Prestika from "../src/img/prestika.png";
import Prestika2 from "../src/img/prestika2.png";
import Prestika3 from "../src/img/prestika3.png";
import SupportDesk from "../src/img/supportdesk.png";
import SupportDesk2 from "../src/img/supportdesk2.png";

function App() {
    const projects = [
        {
            id: 1,
            name: "Prestika",
            desc: "Strona internetowa na zamówienie",
            stack: ["React", "Tailwind CSS", "Sanity CMS"],
            imgs: [Prestika, Prestika2, Prestika3],
            descLong:
                "Jest to landing page sklepu z zabudowami przysznicowymi stworzona w pełni przeze mnie na zamówienie. Strona połączona jest z systemem CMS Sanity, który powzwala na zarządzanie tekstem i zdjęciami, które znajduje się na stronie oraz rozbudowana o możliwość dodania nowych produktów wprzyszłości.",
            github: "https://github.com/j-lewandowski/prestika",
            link: "https://prestika.pl",
        },
        {
            id: 2,
            name: "Helpdesk app",
            desc: "Aplikacja helpdesk",
            stack: ["React", "Bootstrap", "Firebase"],
            imgs: [SupportDesk, SupportDesk2],
            descLong:
                "Aplikacja powstała podczas mojej nauki Reacta oraz Node.js z kursu Brad'a Traversy na platformie Udemy. Całość ostylowana została przy pomocy Bootstrapa, a za backend odpowiedzialny jest stworzony przeze mnie server express.js",
            github: "https://github.com/j-lewandowski/support-desk-app",
            link: "",
        },
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
