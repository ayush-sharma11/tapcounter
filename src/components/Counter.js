import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container my-4 d-flex justify-content-start">
                <button
                    type="button"
                    className="btn btn-md btn-outline-danger my-3"
                    aria-label="Tap"
                    onClick={() => setCount(0)}
                >
                    RESET
                </button>
            </div>
            <div className="container d-flex justify-content-center">
                <p style={{ fontSize: "9rem" }} className="my-5">
                    {count}
                </p>
            </div>
            <div className="d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-lg btn-primary my-5"
                    aria-label="Tap"
                    onClick={() => setCount(count + 1)}
                >
                    TAP
                </button>
            </div>
        </>
    );
}

export default Counter;
