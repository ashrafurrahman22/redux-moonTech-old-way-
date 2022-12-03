import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actionCreator/actionCreator';

const ProductCart = ({product}) => {

    const dispatch = useDispatch();

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-2/3' src={product.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.model}</h2>
          <p>Ratings: {product.rating}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>dispatch(addToCart(product))} className="btn btn-primary rounded-3xl">Add to Cart</button>
            <button className="btn rounded-3xl">wishlist</button>
          </div> 
        </div>
      </div>
    );
};

export default ProductCart;