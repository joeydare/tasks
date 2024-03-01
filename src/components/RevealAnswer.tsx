import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleButtonClick = () => {
        setIsTextVisible(!isTextVisible);
    };
    return (
        <div>
            <Button onClick={handleButtonClick}>Reveal Answer</Button>
            {isTextVisible && <p>42</p>}
        </div>
    );
}
