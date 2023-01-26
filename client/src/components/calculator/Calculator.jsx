import { useState } from "react";

function Calculator() {
    const [calculatorData, setCalculatorData] = useState({
        front: 0,
        back: 0,
        design: 0,
    });

    const onChange = (e) => {
        setCalculatorData({
            ...calculatorData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center font-oxygen text-white relative"
            id="calculator"
        >
            <div className="w-full h-full rounded-lg flex flex-col items-center justify-center space-y-8">
                <div className="w-full flex flex-col">
                    <label className="text-3xl font-IBM text-center">
                        Kalkulator
                    </label>
                    <p className="py-4 text-xl text-center">
                        Poniżej znajduje się prosty kalukator do oszacowania
                        kosztów wykonania poszczególnych usług
                    </p>
                </div>
                <div className="flex flex-col w-full px-6 md:px-0 md:w-96">
                    <label>Usługi Frontend'owe</label>
                    <input
                        type="range"
                        min="0"
                        max="30"
                        className="accent-accent"
                        name="front"
                        value={calculatorData.front}
                        onChange={onChange}
                    />
                    <div className="w-full text-center font-IBM mt-3 text-xl">
                        {calculatorData.front} dni
                    </div>
                </div>
                <div className="flex flex-col md:w-96 w-full px-6 md:px-0">
                    <label>Usługi Backend'owe</label>
                    <input
                        type="range"
                        min="0"
                        max="30"
                        name="back"
                        className="accent-accent"
                        onChange={onChange}
                        value={calculatorData.back}
                    />
                    <div className="w-full text-center font-IBM mt-3 text-xl">
                        {calculatorData.back} dni
                    </div>
                </div>
                <div className="flex flex-col md:w-96 w-full px-6 md:px-0">
                    <label>Projektowanie strony / aplikacji</label>
                    <input
                        type="range"
                        min="0"
                        max="30"
                        name="design"
                        className="accent-accent"
                        onChange={onChange}
                        value={calculatorData.design}
                    />
                    <div className="w-full text-center font-IBM mt-3 text-xl">
                        {calculatorData.design} dni
                    </div>
                </div>

                <div className="font-oxygen text-2xl">
                    W sumie:
                    <span className="ml-2 text-IBM font-bold">
                        {parseInt(calculatorData.front) * 350 +
                            parseInt(calculatorData.back) * 300 +
                            parseInt(calculatorData.design) * 200}{" "}
                        zł
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
