import Logo from "../../img/Logo.svg";

function Navbar() {
    return (
        <div className="w-full fixed bg-primary z-10 shadow-lg">
            <div className="flex justify-between items-center px-8 pt-4 pb-3 text-white font-oxygen">
                <img src={Logo} alt="Logo" className="w-16" />
                <ul className="hidden md:flex items-start gap-8">
                    <li className="hover:text-accent hover:cursor-pointer">
                        Strona główna
                    </li>
                    <li className="hover:text-accent hover:cursor-pointer">
                        O mnie
                    </li>
                    <li className="hover:text-accent hover:cursor-pointer">
                        Moje projekty
                    </li>
                    <li className="hover:text-accent hover:cursor-pointer">
                        Kontakt
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
