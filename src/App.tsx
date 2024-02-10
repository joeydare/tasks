import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Joey Dare UD CISC275 with React Hooks and TypeScript Hello World
            </header>
            <h1>Header Task 3</h1>

            <div className="container">
                <div className="col">
                    <div className="red-rect">
                        <ol>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>item 3</li>
                        </ol>
                        <img src={require("./thumbs.png")} alt="Thumbs up" />
                    </div>
                </div>

                <div className="col">
                    <div className="red-rect">
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
