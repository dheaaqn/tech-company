import React from "react";
import { Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import "./index.scss";

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Header style={{
            background: "none"
        }}>
            <div className="logo" />
            <div className="menu">
                <MenuOutlined style={{ fontSize: "16px" }} />
            </div>
        </Header>
    )
}

export default HeaderComponent;