import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={toggleEditMode}
                />
            </Form>
            {editMode ? (
                <Form>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={handleNameChange}
                    />
                    <Form.Check
                        type="checkbox"
                        id="student-switch"
                        label={isStudent ? "Student" : "Not a Student"}
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </Form>
            ) : (
                <div>
                    <p>
                        {userName} is{" "}
                        {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            )}
        </div>
    );
}
