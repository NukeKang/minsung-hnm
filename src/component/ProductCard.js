import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProductDetailPage = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="productCard" onClick={showProductDetailPage}>
      <img className="productImage" src={item?.img} />
      <div>{item?.choice === true ? "MD's choice" : ""}</div>
      <div>{item?.title}</div>
      <div>
        ₩{item?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </div>
      <div>{item?.new === true ? "신상품" : ""}</div>
    </div>
  );
};

export default ProductCard;
