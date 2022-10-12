import { Col, Row } from "antd";
import bgImage1 from "../../../public/img/ad-img1.png";
import bgImage2 from "../../../public/img/ad-img2.png";

const Information = () => {
  return (
    <div className="block informationBlock">
      <Row gutter={24}>
        <Col md={12}>
          <div
            className="holder"
            style={{
              backgroundImage: `url(${bgImage1})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3>Everyday essentials from</h3>
            <div className="price">60P</div>
          </div>
        </Col>
        <Col md={12}>
          <div
            className="holder"
            style={{
              backgroundImage: `url(${bgImage2})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3>Everyday essentials from</h3>
            <p>Free when you spend over $20</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
