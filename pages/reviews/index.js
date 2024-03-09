import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Index = () => {
    const router = useRouter();
    const [reviews,setReviews]=useState([])
    const [review,setReview]=useState("")


    const fetchReviews=async()=>{
       const res=await fetch("/api/reviews")
       const data=await res.json();
       setReviews(data)
    }
    const postReview=async()=>{
        const res=await fetch("/api/reviews",{
                method:"POST",
                body:JSON.stringify({review}),
                headers:{
                    "Content-Type":"application/json"
                }
        })
       const data=await res.json();
       setReview("")
       fetchReviews()
    }

const handleDelete=async(reviewId)=>{
    const res=await fetch(`api/reviews/${reviewId}`,{
        method:"DELETE"
    })
    // const data=await res.json();
    fetchReviews();
    }
    const gotoupdate = (reviewId) =>  (e) => { 
        // e.preventDefault();
    }
    return (
        <div>
            <button className='btn btn-info text-light m-5' onClick={fetchReviews}><b>Get all Reviews</b></button>
            {reviews.map(r =>
            <div className="card bg-info-subtle text-center d-inline-block w-25  m-5">
            <div className="card-body">
                        <h4 className="card-title">Review {r.id}</h4>
                        <h5 className="card-title text-primary">{r.user}</h5>
                        <h6 className="card-title text-dark">Product: {r.product}</h6>
                        <p className="card-text">{r.comment}</p>
                        <button onClick={()=>handleDelete(r.id)} className='btn btn-danger m-3'>Delete</button>               
                        <button onClick={()=>{router.push(`http://localhost:3000/reviews/update/${r.id}`);}} className='btn btn-outline-warning m-3'>Update</button>               
</div>
<div className="card-footer text-body-secondary">
    2 days ago
</div>
</div>
            )}
            <input type='text' value={review} onChange={(e)=>{setReview(e.target.value)}}></input>
            <button onClick={postReview}>Add Review</button>
            <button onClick={()=>{router.push(`/reviews/update/2`)}}>Click me</button>   

        </div>
    );
}

export default Index;
