import React, { useState, useEffect } from "react";
import "./styles.scss";
import Instructions from "./components/Instructions";

const App = () => {
    const [height, setHeight] = useState(80);
    const [burnOut, setBurnOut] = useState(false);

    const replaceCandle = () => {
        setHeight(80);
        setBurnOut(false);
    };

    const makeSmaller = () => setHeight(height - 1);

    useEffect(() => {
        const id = setInterval(() => setHeight((prev) => prev - 1), 2000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        height < 10 && setBurnOut(true);
    }, [height]);

    return (
        <>
            <div className="block">
                <Instructions />
            </div>
            <div className="block">
                <div>
                    <button onClick={makeSmaller}>Make Candle Smaller</button>
                </div>
            </div>
            <div className="block candleContainer">
                {burnOut ? (
                    <div>
                        <button onClick={replaceCandle}>Replace candle</button>
                    </div>
                ) : (
                    <div className="candle" style={{ height: `${height}%` }}>
                        <div className="flame">
                            <div className="shadows" />
                            <div className="top" />
                            <div className="middle" />
                            <div className="bottom" />
                        </div>
                        <div className="wick" />
                        <div className="wax" />
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
