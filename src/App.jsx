import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header/>
            <h1 className="yellow"> SudoRate</h1>
            <p>An App for rating of products and services</p>
            <ul>
                <li>Hawaii</li>
                <li>Rio</li>
                <li>Jamaica</li>
            </ul>
            <Footer/>
        </div>
    )
}

export default App;
