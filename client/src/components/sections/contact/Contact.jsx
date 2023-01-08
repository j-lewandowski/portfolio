function Contact() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center font-oxygen text-white relative space-y-16">
            <p className="font-IBM text-3xl font-bold">Napisz do mnie</p>
            <button className="p-4 bg-[#16191c] rounded-md font-IBM hover:text-accent">
                Napisz wiadomość
            </button>
            <div className="absolute"></div>
        </div>
    );
}

export default Contact;
