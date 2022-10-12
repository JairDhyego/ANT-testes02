import React from "react";
import { Col, Row } from "antd";

const ProductCategories = () => {
  const productCategories = [
    {
      key: "1",
      image: "../../../img/img15.jpg",
      title: "Frozen",
    },
    {
      key: "2",
      image: "../../../img/img16.jpg",
      title: "Fresh",
    },
    {
      key: "3",
      image: "../../../img/img17.jpg",
      title: "Food Cupboard",
    },
    {
      key: "4",
      image: "../../../img/img18.jpg",
      title: "Household",
    },
    {
      key: "5",
      image: "../../../img/img19.jpg",
      title: "Drinks",
    },
    {
      key: "6",
      image: "../../../img/img20.jpg",
      title: "Bakery",
    },
    {
      key: "7",
      image: "../../../img/img21.jpg",
      title: "Fresh Fruits",
    },
    {
      key: "8",
      image: "../../../img/img22.jpg",
      title: "Hot Buys",
    },
    {
      key: "9",
      image: "../../../img/img23.jpg",
      title: "Offers",
    },
    {
      key: "10",
      image: "../../../img/img24.jpg",
      title: "Luxury",
    },
    {
      key: "11",
      image: "../../../img/img25.jpg",
      title: "Beers & Wines",
    },
    {
      key: "12",
      image: "../../../img/img26.jpg",
      title: "Christmas",
    },
  ];

  return (
    <div className="block producutCategories">
      <h2>Product Categories</h2>
      <Row gutter={[24, 24]}>
        {productCategories.map((product) => (
          <Col
            xs={{ span: 12 }}
            sm={{ span: 6 }}
            lg={{ span: 4 }}
            key={product.key}
          >
            <div className="content">
              <div className="image">
                <img src={product.image} alt="product" />
              </div>
              <h3>{product.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductCategories;
