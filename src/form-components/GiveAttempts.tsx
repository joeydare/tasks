import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numReqAttempts, setNumReqAttempts] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const num = event.target.value;
        const parseNum = parseInt(num, 10) || 0;
        setNumReqAttempts(parseNum.toString());
    };
    const handleUseAttempt = () => {
        if (numAttempts > 0) {
            setNumAttempts(numAttempts - 1);
        }
    };
    const handleGainAttempt = () => {
        const parsedValue = parseInt(numReqAttempts, 10) || 0;
        setNumAttempts(numAttempts + parsedValue);
        setNumReqAttempts("");
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {numAttempts}</p>
            <label>
                Request Attempts:
                <input
                    type="number"
                    value={numReqAttempts}
                    onChange={handleChange}
                />
            </label>
            <button onClick={handleUseAttempt} disabled={numAttempts === 0}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempt}>Gain Attempts</button>
        </div>
    );
}
