import { Col, Row, Button } from "antd";

const SaleProduct = () => {
  const products = [
    {
      key: "1",
      image: "../../../public/img/img5.jpg",
      title: "Glens Vodka 70cl Extra smooth",
      saleprice: "£20.00",
      price: "£15.50",
    },
    {
      key: "2",
      image: "../../../public/img/img6.jpg",
      title: "Pot Noodle Chicken & Mushroom Standard 90g",
      saleprice: "£1.50",
      price: "£0.90",
    },
    {
      key: "3",
      image: "../../../public/img/img7.jpg",
      title: "Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g",
      saleprice: "£2.00",
      price: "£1.50",
    },
    {
      key: "4",
      image: "../../../public/img/img8.jpg",
      title: "Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g",
      saleprice: "£3.00",
      price: "£2.50",
    },
  ];

  return (
    <>
      <h2>SaleProduct</h2>
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

export default SaleProduct;
