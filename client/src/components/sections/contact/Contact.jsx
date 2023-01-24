import { useState } from "react";
import Calculator from "./Calculator";
import { Location } from "react-router-dom";

function Contact() {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [calculatorIsOpen, setCalculatorIsOpen] = useState(false);
    const [email, setEmail] = useState(false);
    const [message, setMessage] = useState(false);

    const onSendClick = (e) => {
        e.preventDefault();
        if (formIsOpen) {
            console.log("sent message");
        } else {
            setFormIsOpen(!formIsOpen);
        }
    };

    const onCalculatorOpen = (e) => {
        e.preventDefault();
        setCalculatorIsOpen(!calculatorIsOpen);
    };

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center font-oxygen text-white relative"
            id="contact"
        >
            <p className="font-IBM text-3xl font-bold mb-8">Napisz do mnie</p>
            {/* {formIsOpen && (
                <div className="flex flex-col gap-4 w-96 font-IBM">
                    <input className="w-full bg-[#16191c] p-4" type="email" />
                    <textarea className="w-full bg-[#16191c] p-4" />
                </div>
            )} */}
            <div
                className={`flex flex-col gap-4 w-full items-center font-IBM transition-all duration-150 px-6 h-${
                    formIsOpen ? "full" : "0"
                }}`}
            >
                <input
                    className="w-full md:w-[50%] bg-[#16191c] p-4 rounded-md focus:border-accent border-2 border-solid"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    className="w-full md:w-[50%] bg-[#16191c] p-4 rounded-md focus:border-accent border-2 border-solid"
                    placeholder="Treść"
                />
            </div>
            <button
                className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent mt-16"
                onClick={onSendClick}
            >
                {formIsOpen ? "Wyślij" : "Napisz wiadomość"}
            </button>
            {/* <button
                className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent mt-4"
                onClick={onCalculatorOpen}
            >
                Kalkulator
            </button> */}
            <div className="absolute bottom-2 text-sm text-gray-400 font-IBM">
                <p>Designed & created by Jakub Lewandowski</p>
            </div>
            {/* {calculatorIsOpen && (
                <Calculator
                    isOpen={calculatorIsOpen}
                    setIsOpen={setCalculatorIsOpen}
                />
            )} */}
        </div>
    );
}

export default Contact;
