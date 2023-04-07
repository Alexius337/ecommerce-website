import React, { useState, useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from your API using the product ID from
    // props.match.params.id and update the state using setProduct.
  }, [props.match.params.id]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;