import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Indigo",
        "Violet",
        "Pink"
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <div
                        key={color}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Form.Check
                            inline
                            type="radio"
                            label={color}
                            id={`color-radio-${color}`}
                            style={{
                                backgroundColor: color,
                                marginRight: "10px"
                            }}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                            value={color}
                        />
                    </div>
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor
                }}
            >
                {`You have chosen: ${selectedColor}`}
            </div>
        </div>
    );
}
