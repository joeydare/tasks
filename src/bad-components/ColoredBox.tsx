import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    colorIndex,
    colorChange
}: {
    colorIndex: number;
    colorChange: (newColorIndex: number) => void;
}): JSX.Element {
    const handleClick = () => {
        const newColorIndex = (colorIndex + 1) % COLORS.length;
        colorChange(newColorIndex);
    };

    return <Button onClick={handleClick}>Next Color</Button>;
}

function ColorPreview({ color }: { color: string }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const handleColorChange = (newColorIndex: number) => {
        setColorIndex(newColorIndex);
    };

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    colorChange={handleColorChange}
                />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}
