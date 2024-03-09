import React from 'react'
import useSWR from 'swr';

// SWR 
const fetcher=async ()=>{
    const res=await fetch("http://localhost:1000/orders");
    const data=await res.json();
    return data;
}
const Orderssswr = () => {
    const {data,error}=useSWR("orders",fetcher);
    if (error) return <div>error</div>
    if (!data) return <div>Loading....</div>
return (
    <div>
        <h1 style={{ textAlign: 'center' }}>Orders SWR</h1>
        <table className="table table-borderless table-info ">
  <thead>
    <tr>
      <th className='table-secondary' scope="col">Order Id</th>
      <th className='table-secondary' scope="col">User Id</th>
      <th className='table-secondary' scope="col">Product Id</th>
    </tr>
  </thead>
  <tbody>
  {data.map(o=> <tr key={o.id}>
      <th scope="row">{o.id}</th>
      <td>{o.id}</td>
      <td>{o.userId}</td>
      {/* <td>{o.products.map(p => <p>{p.productId}</p>, )}</td> */}
    </tr>)}
  </tbody> 
</table>
        
        {/* {data.map(o => <div key={o.id} >
            <h2>Order is done by user with id :{o.userId}</h2>
            {o.products.map(p => <div><h3> Products Included :{p.productId}</h3></div> )}
        </div> )} */}
    </div>
)
}


export default Orderssswr;


