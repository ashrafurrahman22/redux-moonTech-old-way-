import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actionCreator/actionCreator';
import { BsCart4 } from "react-icons/bs"
import { TbJewishStar } from "react-icons/tb"
import {RiDeleteBin6Fill} from "react-icons/ri"
import { useLocation } from 'react-router-dom';


const ProductCart = ({product}) => {

    const dispatch = useDispatch();
    const  { pathname } = useLocation()

    return (
        <div className="card card-compact bg-base-100 relative shadow-xl">
          { pathname.includes("cart") && <div className='badge badge-sm indicator-item p-3'>
            <p>{product.quantity}</p>
          </div>}
        <figure><img className='w-2/3' src={product.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.model}</h2>
          <p>Ratings: {product.rating}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
            { !pathname.includes("cart") && <button onClick={()=>dispatch(addToCart(product))} className="btn btn-primary flex justify-between gap-2 rounded-3xl">Add to Cart <BsCart4/> </button>}
            { !pathname.includes("cart") && <button onClick={()=>dispatch(addToCart(product))} className="btn btn-primary flex justify-between gap-2 rounded-3xl">wishlist <TbJewishStar/> </button>}
            { pathname.includes("cart") && <button onClick={()=> dispatch(removeFromCart(product))} className="btn rounded-3xl flex gap-2 normal-case"> Remove <RiDeleteBin6Fill /></button>}
          </div> 
        </div>
      </div>
    );
};

export default ProductCart;