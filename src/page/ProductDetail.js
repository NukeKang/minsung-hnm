import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  const getProductDetailData = async () => {
    try {
      const response = await fetch(
        `https://my-json-server.typicode.com/Ravender91/minsung-hnm/products/${id}`
      );
      const data = await response.json();

      setProductData(data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getProductDetailData();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="productDetailImage">
          <img className="productImage" src={productData?.img} />
        </Col>
        <Col>
          <div className="productDetailTitle">{productData?.title}</div>
          <div>
            ₩
            {productData?.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            원
          </div>
          <select>
            <option>--사이즈선택--</option>
            {productData?.size.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <div>
            <Button variant="dark">장바구니 추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
