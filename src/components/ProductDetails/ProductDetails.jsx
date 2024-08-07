import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../../apiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productView, setProductView] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductView(data);
    };
    fetchProductDetails();
  }, [id]);

  const handleBuyNow =()=>{
    window.confirm('The product is out of stock!')
  }

  return (
    <div className="product-deatils-container">
      <img src={productView.image} alt="image" className="product-image" />
      <div className="product-content">
        <h2 className="product-title">{productView.title}</h2>
        <p className="product-description">{productView.description}</p>
        <p className="product-price">{productView.price}</p>
        <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to={"/"}>
          <button className="bo-back-home-button">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
