import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎁",
    Halloween = "🎃",
    Easter = "🐇",
    stPatricks = "☘️",
    Valentines = "💖"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Valentines
    );
    const advanceByAlphabet = (current: Holiday): Holiday => {
        if (current === Holiday.Christmas) {
            return Holiday.Easter;
        } else if (current === Holiday.Easter) {
            return Holiday.Halloween;
        } else if (current === Holiday.Halloween) {
            return Holiday.stPatricks;
        } else if (current === Holiday.stPatricks) {
            return Holiday.Valentines;
        } else if (current === Holiday.Valentines) {
            return Holiday.Christmas;
        } else {
            return current;
        }
    };

    const advanceByYear = (current: Holiday): Holiday => {
        if (current === Holiday.Valentines) {
            return Holiday.stPatricks;
        } else if (current === Holiday.stPatricks) {
            return Holiday.Easter;
        } else if (current === Holiday.Easter) {
            return Holiday.Halloween;
        } else if (current === Holiday.Halloween) {
            return Holiday.Christmas;
        } else if (current === Holiday.Christmas) {
            return Holiday.Valentines;
        } else {
            return current;
        }
    };

    const handleAlphabeticalClick = () => {
        const nextHoliday = advanceByAlphabet(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    const handleYearlyClick = () => {
        const nextHoliday = advanceByYear(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button variant="primary" onClick={handleAlphabeticalClick}>
                Advance by Alphabet
            </Button>
            <Button variant="secondary" onClick={handleYearlyClick}>
                Advance by Year
            </Button>
        </div>
    );
}
