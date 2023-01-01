import Navbar from "./components/navbar/Navbar";
import Main from "./components/sections/main/Main";

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="h-screen">
                <Main />
            </div>
        </div>
    );
}

export default App;
