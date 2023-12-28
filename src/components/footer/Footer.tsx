import { Layout } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const FooterBottom = () => {
    return (
        <div>
            <Layout>
                <Footer className="bg-blue-200" style={{ textAlign: 'center' }}>Essence-Of-Love ©2023 Created By ❤️</Footer>
            </Layout>
        </div>
    );
}

export default FooterBottom;