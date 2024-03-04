import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [dropdownChoice, setChoice] = useState(options[0]);
    const isCorrect = dropdownChoice === expectedAnswer;
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={dropdownChoice}
                onChange={(event) => setChoice(event.target.value)}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? <span>✔️ Correct</span> : <span>❌ Incorrect</span>}
        </div>
    );
}
