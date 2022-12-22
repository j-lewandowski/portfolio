import Navitem from "./Navitem";

function Navbar() {
    return (
        <div className="text-white flex flex-row p-6 justify-between">
            <div>Jakub Lewandowski</div>
            <ul className="flex flex-row justify-around space-x-4">
                <Navitem name="Strona Główna" />
                <Navitem name="Umiejętności i narzędzia" />
                <Navitem name="Moje projekty" />
            </ul>
        </div>
    );
}

export default Navbar;
