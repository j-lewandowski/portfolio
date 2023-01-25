import Logo from "../../img/Logo.svg";
import { slide as Menu } from "react-burger-menu";

import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const onClick = (e) => {
        navigate("/");
    };

    return (
        <nav
            className="w-full fixed bg-primary z-10 shadow-lg"
            data-aos="fade-down"
        >
            <div className="w-full flex justify-between items-center px-8 pt-4 pb-3 text-white font-oxygen duration-150">
                <a href="#hero" data-aos="fade-down">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16"
                        onClick={onClick}
                    />
                </a>
                <ul className="hidden md:flex items-start gap-8">
                    <a href="#hero" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            Strona główna
                        </li>
                    </a>
                    <a href="#about-me" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            O mnie
                        </li>
                    </a>
                    <a
                        href="#my-projects"
                        onClick={onClick}
                        data-aos="fade-down"
                    >
                        <li className="hover:text-accent hover:cursor-pointer">
                            Moje projekty
                        </li>
                    </a>
                    <a href="#contact" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            Kontakt
                        </li>
                    </a>
                </ul>
            </div>
            <div className="block md:hidden">
                <Menu right>
                    <a href="#hero" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            Strona główna
                        </li>
                    </a>
                    <a href="#about-me" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            O mnie
                        </li>
                    </a>
                    <a
                        href="#my-projects"
                        onClick={onClick}
                        data-aos="fade-down"
                    >
                        <li className="hover:text-accent hover:cursor-pointer">
                            Moje projekty
                        </li>
                    </a>
                    <a href="#contact" onClick={onClick} data-aos="fade-down">
                        <li className="hover:text-accent hover:cursor-pointer">
                            Kontakt
                        </li>
                    </a>
                </Menu>
            </div>
        </nav>
    );
}

export default Navbar;
