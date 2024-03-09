import { useRouter } from 'next/router';
import React from 'react';

const OrderId = () => {
    const router= useRouter();
    const {orderId}=router.query
    console.log(orderId)
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Order Id is {orderId}</h1>
        </div>
    );
}

export default OrderId;
