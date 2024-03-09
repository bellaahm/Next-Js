import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter();
    console.log(router)
    const {productId,orderId}=router.query
    console.log(productId);
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Product Id is {productId} , Order Id is {orderId}</h1>
        </div>
    );
}

export default ProductId;
