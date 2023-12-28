import React from "react";
import Header from "./components/header/Header";
import FooterBottom from "./components/footer/Footer";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

const App = () => {
    return (
        <div className="container mx-auto">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><Header /> <Home /></>} />
                    <Route path="/login" element={<><Header /> <Login /></>} />
                </Routes>
            </BrowserRouter>
            <FooterBottom />
        </div>
    );  
}

export default App;