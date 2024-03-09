import { useRouter } from "next/router";
import React from 'react';
import image1 from '../../public/Images/1.png';
import image2 from '../../public/Images/2.png';
import image3 from '../../public/Images/7.jpg';
import image4 from '../../public/Images/8.jpg';
import image5 from '../../public/Images/9.png';
import image6 from '../../public/Images/10.png';
import Image from "next/image";
const UserId = ({ user }) => {
    const imgArr = [image1, image2, image3, image4, image5, image6];
    // const router=useRouter();
    // console.log(router)
    // const { userId } = router.query;
    return (
            <div className='card mt-5 m-5 d-inline-block' style={{ width: "18rem" }}>
                <Image src={imgArr[4]} className="card-img-top rounded-circle w-50 h-50 m-4 mt-4" alt={`user-${4+1}`} />
                <div className="card-body">
                    <h5 className="card-title text-primary-emphasis">{user.name}</h5>
                    <p className="card-text text-info-emphasis ">
                    <big><b>Contact Info: </b></big><br/><b>Email: </b>{user.email} <br />
                    <b>Phone:</b> {user.phone}<br/>
                    <b>Website:</b> {user.website}<br/>
                    <b>Company:</b> {user.company.name}<br/>
                    </p>
                </div>
            </div>
    );
}
export default UserId;
// SSG (Static Site Generation) - serverless hosting for static sites  
// API routes - serverless functions for creating APIs  
// Dynamic Routing - routing that is generated at build time based on data from a data source 
export async function getStaticProps(context){
    const {params}=context;  //{params:{userId:1}}
    const res= await fetch(`http://localhost:1000/users/${params.userId}`)
    const data = await res.json();  //{name:"jack",age:25
    return {
        props:{user:data},
        revalidate:10
    }
}
// This Method is used when we're fetching dynamic data
export async function getStaticPaths(){
    return {
        paths:[
            {params:{userId:"1"}},
            {params:{userId:"2"}},
            {params:{userId:"3"}},
        ],
        fallback:"blocking"
    }
}