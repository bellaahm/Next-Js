import { getSession } from 'next-auth/react';
import React from 'react';

const Index = ({products}) => {
    // console.log(news)
    return (
        <div>
        <table className="table table-borderless table-info ">
  <thead>
    <tr>
      <th className='table-secondary' scope="col">Product Id</th>
      <th className='table-secondary' scope="col">Product Title</th>
      <th className='table-secondary' scope="col">Rating</th>
    </tr>
  </thead>
  <tbody>
  {products.map(p=> <tr key={p.id}>
      <th scope="row">{p.id}</th>
      <td>{p.title}</td>
      <td>{p.rating.rate}</td>
    </tr>)}
  </tbody> 
</table>
        </div>
    );
}
export default Index;
//SSR (Server Side Rendering)
export async function getServerSideProps(context) {
  const session=await getSession(context)
  console.log(session)
  const res= await fetch("http://localhost:1000/products");
  const data=await res.json();
  // console.log(data);
 if(!session)
 return {
     redirect:{
         destination:"api/auth/signin?callbackUrl=http://localhost:3000/prods",
     }
 }
 else {
   return {
       props:{
           products:data
       }
   }
}
}
