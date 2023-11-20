import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/Footer";
import Home from "./components/home/Home";

const App = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <Home />
            <FooterBottom />
        </div>
    );  
}

export default App;