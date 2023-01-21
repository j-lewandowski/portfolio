function Calculator({ setIsOpen, isOpen }) {
    const onExit = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="bg-black h-screen w-screen absolute bg-opacity-40 z-20 flex justify-center items-center"
            onClick={onExit}
        >
            <div className="bg-primary h-[70%] w-[40%] p-8 flex-col items-center justify-center">
                <div className="flex">
                    <label>Usluga</label>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
