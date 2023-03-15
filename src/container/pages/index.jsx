import React, { Fragment } from "react";
import Header from "../components/Header";

import Home from "./Home";
import Intro from "./Intro";
import CoreValues from "./CoreValues";

import { Layout } from "antd";
const { Content } = Layout;

const Index = () => {
    return (
        <Fragment>
            <Header />
            <Content>
                <Home/>
                <Intro/>
                <CoreValues/>
            </Content>
        </Fragment>
    )
}

export default Index;