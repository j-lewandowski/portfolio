import Logo from "../../img/Logo.svg";

function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center px-8 pt-4 pb-3 text-white font-oxygen">
                <img src={Logo} alt="Logo" className="w-16" />
                <ul className="flex items-start gap-8">
                    <li>Strona główna</li>
                    <li>O mnie</li>
                    <li>Narzędzia i umiejętności</li>
                    <li>Praca</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
