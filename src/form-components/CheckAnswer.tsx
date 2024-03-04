import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <form>
                <label>
                    Your Answer:
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={handleChange}
                    />
                </label>
            </form>
            {userAnswer === expectedAnswer ? (
                <p>✔️ Correct!</p>
            ) : (
                <p>❌ Incorrect</p>
            )}
        </div>
    );
}
