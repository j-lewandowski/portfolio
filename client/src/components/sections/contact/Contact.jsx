import { useState } from "react";
import Calculator from "./Calculator";
import { Location } from "react-router-dom";
import { toast } from "react-toastify";

function Contact() {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (!formData.email.includes("@") || formData.email === "") {
            toast.error("Nieprawidłowy email!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else if (formData.message === "") {
            toast.error("Wiadomość nie może być pusta!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else {
            toast.success("Wiadomość wysłana!", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            setFormData({
                email: "",
                message: "",
            });
        }
    };

    const onChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center font-oxygen text-white relative"
            id="contact"
        >
            <p
                className="font-IBM text-3xl font-bold mb-8"
                data-aos="fade-down"
            >
                Napisz do mnie
            </p>
            <form
                className={`flex flex-col gap-4 w-full items-center font-IBM transition-all duration-150 px-6 h-${
                    formIsOpen ? "full" : "0"
                }}`}
                onSubmit={onSubmit}
                data-aos="fade-up"
            >
                <input
                    className="w-full md:w-[50%] bg-[#16191c] p-4 rounded-md focus:border-accent border-2 border-solid"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    name="email"
                    onChange={onChange}
                />
                <textarea
                    className="w-full md:w-[50%] bg-[#16191c] p-4 rounded-md focus:border-accent border-2 border-solid"
                    placeholder="Treść"
                    value={formData.message}
                    onChange={onChange}
                    name="message"
                />
                <button className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent mt-4">
                    Wyślij
                </button>
            </form>
            <div className="absolute bottom-2 text-sm text-gray-400 font-IBM">
                <p>Designed & created by Jakub Lewandowski</p>
            </div>
        </div>
    );
}

export default Contact;
