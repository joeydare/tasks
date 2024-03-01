import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [isQuizInProgress, setIsQuizInProgress] = useState(false);
    const handleStartQuiz = () => {
        if (attempts > 0) {
            setIsQuizInProgress(true);
            setAttempts((prevAttempts) => prevAttempts - 1);
        }
    };
    const handleStopQuiz = () => {
        setIsQuizInProgress(false);
    };
    const handleMulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <span data-testid="attempts-display">{attempts}</span>
            <Button
                onClick={handleStartQuiz}
                disabled={isQuizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuiz} disabled={!isQuizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={isQuizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
