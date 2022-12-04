import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from './ProductCart';

const Cart = () => {

    const cart = useSelector((state)=>state.cart)

    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            {
                cart.sort((a, b) => a.id - b.id ).map(product=> <ProductCart
                key={product.id}
                product={product}
                /> )
            }
        </div>
    );
};

export default Cart;