import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const resetCount = () => {
        setCount(0);
    };
    return (
        <>
            <section className="page-navbar">
                <nav className="navbar bg-primary">
                    <div className="container-fluid">
                        <div
                            style={{ margin: "auto" }}
                            className="navbar-brand text-white mx-4"
                        >
                            <h2>Tap Counter</h2>
                        </div>
                        <div className="mx-4">
                            <button
                                className="btn btn-warning mx-2 text-dark"
                                onClick={resetCount}
                            >
                                Reset
                            </button>
                            <a
                                className="btn btn-light mx-2 text-dark"
                                href="https://github.com/ayush-sharma11"
                            >
                                Info
                            </a>
                        </div>
                    </div>
                </nav>
            </section>

            <section className="filler" style={{ marginTop: "7rem" }}>
                <br />
            </section>

            <section className="page-counter">
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
            </section>
        </>
    );
}

export default App;
