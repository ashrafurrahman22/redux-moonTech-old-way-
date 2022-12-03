import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux"
import ProductCart from './ProductCart';

const Home = () => {

    const state = useSelector((state) => state )

    console.log(state)

    const [products, setProduct] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data => setProduct(data))
    },[])



    return (
        <div className='grid lg:grid-cols-3 gap-8'>
            {
                products.map(product => <ProductCart
                key={product.id}
                product={product}
                /> )
            }
        </div>
    );
};

export default Home;