import React from "react";
import { Typography } from "antd";

import "./index.scss";

const { Title, Text } = Typography;

const CoreValues = () => {
    return (
        <div className="cova container">
            <div className="cova heading">
                <div className="cova left-side">
                    <div className="cova background-img"/>
                </div>
                <div className="cova right-side">
                    <div className="cova heading-content">
                        <Title>Our Core Values</Title>
                        <Text>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.<br/>In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</Text>
                    </div>
                </div>
            </div>
            <div className="cova content">
                <div className="cova content-1">
                    <div className="cova content-1-body">
                        <Title>Dedication</Title>
                        <Text>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</Text>
                    </div>
                </div>
                <div className="cova content-2">
                    <div className="cova content-2-body">
                        <Title>Intellectual Honesty</Title>
                        <Text>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</Text>
                    </div>
                </div>
                <div className="cova content-3">
                    <div className="cova content-3-body">
                        <Title>Curiosity</Title>
                        <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreValues;