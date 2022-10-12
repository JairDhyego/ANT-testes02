import { Col, Row, Button } from "antd";

const RecentProduct = () => {
  const products = [
    {
      key: "1",
      image: "../../../public/img/img1.jpg",
      title: "fairy clean",
      price: "2.00",
    },

    {
      key: "2",
      image: "../../../public/img/img2.jpg",
      title: "colgate ",
      price: "1.50",
    },

    {
      key: "3",
      image: "../../../public/img/img3.jpg",
      title: "fairy clean",
      price: "5.70",
    },

    {
      key: "4",
      image: "../../../public/img/img4.jpg",
      title: "confort intense fresh",
      price: "4.50",
    },
  ];

  return (
    <>
      <h2>RecentProduct</h2>
      <Row gutter={24}>
        {products.map((product) => (
          <Col lg={6} key={product.key}>
            <div className="content">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h3> {product.title}</h3>
              <div className="price"> {product.price}</div>
              <Button type="primary">Add a cesta</Button>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default RecentProduct;
