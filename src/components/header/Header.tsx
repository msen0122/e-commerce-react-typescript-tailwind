import React from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";

const { Content, Footer } = Layout;

const Header = () => {

    const navigate = useNavigate();
    return (
        // className="flex flex-col min-h-screen" - to give auto space between nav and footer
        <Layout> 
        <div>
            <nav className="flex justify-around py-8 mx-auto bg-blue-200">
                <div className="flex items-center">
                <h3 className="text-2xl font-medium text-blue-500">
                    Logo
                </h3>
            </div>
            <div className="items-center hidden space-x-8 lg:flex">
                <a href="/" className="">Home</a>
                <a href="">Services</a>
                <a href="">Products</a>
                <a href="">Our Team</a>
                <a href="">Contact Us</a>
            </div> 
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-blue-100 bg-teal-800 rounded-md"
                        onClick={() => navigate("/login")}        
                >
                    Login
                </button>
                <button className="px-4 py-2 text-gray-200 bg-sky-800 rounded-md">
                    Register
                </button>
            </div>
            </nav>
        </div>
    </Layout>
    );
}

export default Header;