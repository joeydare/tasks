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
        switch (current) {
            case Holiday.Christmas:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Halloween;
            case Holiday.Halloween:
                return Holiday.stPatricks;
            case Holiday.stPatricks:
                return Holiday.Valentines;
            case Holiday.Valentines:
                return Holiday.Christmas;
            default:
                return current;
        }
    };

    const advanceByYear = (current: Holiday): Holiday => {
        switch (current) {
            case Holiday.Valentines:
                return Holiday.stPatricks;
            case Holiday.stPatricks:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Halloween;
            case Holiday.Halloween:
                return Holiday.Christmas;
            case Holiday.Christmas:
                return Holiday.Valentines;
            default:
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
