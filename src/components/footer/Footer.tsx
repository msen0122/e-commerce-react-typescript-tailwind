import { Layout } from "antd";
import React from "react";

const { Header, Content, Footer, Sider } = Layout;

const FooterBottom = () => {
    return (
        <div>
            <Layout>
                <Footer style={{ textAlign: 'center' }}>Essence-Of-Love ©2023 Created By ❤️</Footer>
            </Layout>
        </div>
    );
}

export default FooterBottom;