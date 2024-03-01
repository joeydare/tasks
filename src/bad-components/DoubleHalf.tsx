import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10); // Initial value

    const handleDouble = () => {
        setDhValue((prevValue) => 2 * prevValue);
    };

    const handleHalve = () => {
        setDhValue((prevValue) => 0.5 * prevValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
