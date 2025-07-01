import React from "react";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="container">
            <Header title="Theme Switch Sample 01" />
            <div className="content">
                <ThemeSwitch />
            </div>
            <Footer />
        </div>
    );
}

export default App;
