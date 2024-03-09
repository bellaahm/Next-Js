import React from 'react';
import Image from 'next/image';
import image1 from '../../public/Images/1.png';
import image2 from '../../public/Images/2.png';
import image3 from '../../public/Images/avatar4.jpg';
import image4 from '../../public/Images/avatar1.png';
import image5 from '../../public/Images/9.png';
import image6 from '../../public/Images/10.png';
import image7 from '../../public/Images/7.jpg';
import image8 from '../../public/Images/avatar2.png';
import image9 from '../../public/Images/avatar3.png';
import image10 from '../../public/Images/8.jpg';
import Link from 'next/link';

const Users = ({ users }) => {
    const imgArr = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10];
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Users Page</h1>
            {users.map(u => <div key={u.id} className='card mt-5 m-5 d-inline-block' style={{ width: "18rem" }}>
                <Image src={imgArr[(u.id)-1]} className="card-img-top rounded-circle w-50 h-50 m-4 mt-4" alt="user1" />
                <div className="card-body">
                    <h5 className="card-title text-primary-emphasis">{u.name}</h5>
                    <div className="card-text text-info-emphasis "> <h4><b>Contact Info: </b></h4><b>Email: </b>{u.email} <br/><br/><b>Phone:</b> { u.phone}</div>
                    {/* <a href="#" className="btn btn-info">Show Details</a> */}
                    <Link className="btn btn-info m-auto" href={`users/${u.id}`}>Show Details</Link>
                </div>
            </div> )}
            {/* <div className='card mt-5 m-5 d-inline-block' style={{ width: "18rem" }}>
                <Image src={image2} className="card-img-top rounded-circle w-50 h-50 m-4 mt-4" alt="user2" />
                <div className="card-body">
                    <h5 className="card-title">User 2</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
        </div>
    );
}
export default Users;
// SSG 
export async function  getStaticProps(){
    const res= await fetch ("http://localhost:1000/users");
    const data=await res.json();
    return {props:{users:data}}
}