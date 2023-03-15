import React, { useState } from "react";
import { Typography } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import "./index.scss";

const { Title, Text } = Typography;

const Intro = () => {
    const [contentPage, setContentPage] = useState(1);

    const handleClickPrev = (e) => {
        const target = contentPage - 1;
        
        if(target > 0) {
            setContentPage(target);
        }
    }

    const handleClickNext = (e) => {
        const target = contentPage + 1;
        
        if(target <= 3) {
            setContentPage(target);
        }
    }

    return (
        <div className="intro container">
            <div className="intro left-side">
                {contentPage === 1 ? (
                    <div className="intro content-1">
                        <div className="intro content-1 title">
                            <Title>Who we are</Title>
                        </div>
                        <div className="intro content-1 content">
                            <Title>Technology Company</Title>
                            <Text>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
                        </div>
                    </div>
                ) : null}

                {contentPage === 2 ? (
                    <div className="intro content-2">
                        <div className="intro content-2 title">
                            <Title>What we do</Title>
                        </div>
                        <div className="intro content-2 content">
                            <Title>Professional Brand Management</Title>
                            <Text>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem magnam aliquam quaerat voluptatem.</Text>
                        </div>
                    </div>
                ) : null}

                {contentPage === 3 ? (
                    <div className="intro content-3">
                        <div className="intro content-3 title">
                            <Title>How we do</Title>
                        </div>
                        <div className="intro content-3 content">
                            <Title>Strategize, Design, Collaborate</Title>
                            <Text>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.</Text>
                        </div>
                    </div>
                ): null}
            </div>
            <div className="intro right-side">
                <div className="intro text-page">
                    <Title>{`0${contentPage}`}<span className="intro text-page muted per"> / </span><span className="intro text-page muted total-page">03</span></Title>
                    <button className="intro prev-button" onClick={(e) => handleClickPrev(e)}><ArrowLeftOutlined /></button>
                    <button className="intro next-button" onClick={(e) => handleClickNext(e)}><ArrowRightOutlined /></button>
                </div>
            </div>
        </div>
    )
}

export default Intro;