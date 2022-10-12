import React from "react";
import { Col, Row, Carousel } from "antd";

import image1 from "../../../public/img/banner-img1.jpg";
import image2 from "../../../public/img/banner-img2.jpg";
import image3 from "../../../public/img/banner-img3.jpg";

const Hero = () => {
  return (
    <div className="heroBlock">
      <Row gutter={24}>
        {/* carousel */}
        <Col lg={18}>
          <Carousel autoplay>
            <div>
              <img src={image1} />
            </div>
            <div>
              <img src={image2} />
            </div>
            <div>
              <img src={image3} />
            </div>
          </Carousel>
        </Col>

        {/* information */}
        <Col lg={6}>
          <div className="heroBlocks">
            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="content">
                <h3>Free shipmo</h3>
                <p>Free shipping on orders over R$20</p>
              </div>
            </div>

            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="content">
                <h3>Dinheiro de volta</h3>
                <p>100% garantido no retorno</p>
              </div>
            </div>

            <div className="holder">
              <div className="icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="content">
                <h3>online Support 24/7</h3>
                <p>Suporte sempre seguro</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
