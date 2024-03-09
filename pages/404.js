import React from 'react';
// import "./Error.css";
import errImg from "../public/Images/errorimg.jpg"
import Image from 'next/image';
import Link from 'next/link';
const Error = () => {
    return (
        <>
            <style jsx>{ `
            section {
                width: 100%;
               }
               .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                column-gap: 20px;
               }
               .container img {
                width: 420px;
               }
               .text {
                display: block;
                padding: 40px 40px;
                width: 450px;
               }
               .text {
                display: block;
                padding: 40px 40px;
                width: 450px;
               }
               .text h1 {
                color: #00c2cb;
                font-size: 35px;
                font-weight: 700;
                margin-bottom: 15px;
               }
               .text p {
                font-size: 15px;
                color: #e0ffff;
                margin-bottom: 15px;
                line-height: 1.5rem;
                margin-bottom: 15px;
               }
               .input-box{
                position: relative;
                display: flex;
                width: 100%;
               }
               .input-box input{
                width: 85%;
                height: 40px;
                padding: 5px 15px;
                font-size: 16px;
                color: #22232e;
                border-radius: 5px 0px 0px 5px;
                border: 2px solid #42455a;
                outline: none;
               }
               .input-box button{
                display: flex;
                width: 15%;
                border: 1px solid #004958;
                border-radius: 0px 5px 5px 0px;
                background: #004958;
                color: #e0ffff;
                font-size: 22px;
                align-items: center;
                justify-content: center;
                cursor: pointer;  
               }
               .menu{
                display: flex;
                flex-direction: column;
                margin-top: 15px;
                margin-left: 30px;
               }
               .menu li a{
                display: flex;
                font-size: 1rem;
                color: #00c2cb;
                transition: 0.1s;
               }
               @media screen and (max-width:600px) {
                .container{
                  display: flex;
                  flex-direction: column-reverse;
                }
                .text,.image{
                  width: 100%;
                } 
                .container{
                  min-width: 200px;
                  padding: 40px 0px;
                }
                .text{
                  display: block;
                  width: 100%;
                  padding: 20px 40px;
                }
                .image{
                }
            `}</style>
  <section>
   <div className="container">
     <div className="text">
       <h1>Page Not Found</h1>
       <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
       <div className="input-box">
         <input type="text" placeholder="Search..."/>
         <button><i className="fa-solid fa-search"></i></button>
       </div>
       <ul className="menu">
         <li><Link href="/home">Go Back to Homepage</Link></li>
         <li><Link href="#">Visit our Blog</Link></li>
         <li><Link href="#">Contact support</Link></li>
       </ul>
     </div>
     <div><Image style={{display: "flex",
                  width: "200px",
                  height:"auto",
                  alignSelf: "center",
                  justifyContent: "center",
                  margin: "auto"}}  src={errImg} alt=""/></div>
   </div>
            </section>
   </>
);
}
export default Error;
Error.getLayout=function pageLayout(page){
    return <>{page}</>
}
