import React from "react";
import { Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./index.scss";

const { Title, Text } = Typography;

const Home = () => {
    return (
        <>
            <div className="home container">
                <div className="home left-side">
                    <div className="home background-img"/>
                </div>
                <div className="home right-side">
                    <div className="home content">
                        <Title>Discover <br/> Your Wonder</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                    </div>
                </div>
                <div className="home floating-button">
                    <button className="home the-button" onClick={() => window.scrollTo(0, 600)}>
                        <DownOutlined />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;