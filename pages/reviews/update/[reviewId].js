import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
// import { reviews } from "@component/data/reviews";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const reviewId = () => {
    const router = useRouter();
  const { reviewId } = router.query;
  
    const [review, setReview] = useState(
        {
        product: "",
        user: "",
        rating: 0,
        comment: ""
      });
  
  useEffect(() => {
    if ( reviewId ) { 
      fetch(`/api/reviews/${reviewId}`)
        .then((res) => {
          if (!res.ok) {
          throw new  Error('Could not retrieve review data');
          }
          return res.json();
        })
        .then((data) => setReview(data))
        .catch((err) => console.log(err));
    }
    }, [reviewId]);
const handleOnChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setReview({...review, [name]: value });
  };
  const handleUpdate = async (ev) => {
    // const router = useRouter();
    ev.preventDefault();
    await fetch(`/api/reviews/${reviewId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((response) =>
      {
        if (response.ok) {
          alert("Your review has been updated!");
          router.push("/reviews");
        }
        return response.json()
      })
      // .then((data) => alert("Successfully updated!"))
  //       if (response.ok) {
  // }
  }
  return (
    <div>
      <Box sx={{ width: '300px', margin: 'auto' }}>
        <br />
        <br />
        <br />
        <br />
        <FormControl sx={{ width: '400px', alignItems: 'center', border: '1px solid', padding: '15px', marginBottom: '30px' }}>
          <FormLabel sx={{ fontWeight: 'bold', fontSize: '30px', textAlign: 'center' ,color:'white'}}>Update Review</FormLabel>
          <br />
          <TextField label="Product" sx={{ width: '200px',backgroundColor:'white' }} name="product" value={review.product} onChange={handleOnChange} />
          <br />
          <TextField label="User" sx={{ width: '200px',backgroundColor:'white' }} name="user" value={review.user} onChange={handleOnChange} />
          <br />
          <TextField label="Comment" sx={{ width: '200px',backgroundColor:'white' }} name="comment" value={review.comment} onChange={handleOnChange} />
          <br />
          <TextField label="Rating" sx={{ width: '200px',backgroundColor:'white' }} name="rating" value={review.rating} onChange={handleOnChange} />
          <br />
          <br />
          <Button sx={{ width: '100px', margin: 'auto' }} variant="contained" color="info" onClick={handleUpdate}>
            Update
          </Button>
        </FormControl>
      </Box>
{/* <form>
    <div className="row mb-3">
        <label for="inputName3" className="col-sm-2 col-form-label">Product</label>
        <div className="col-sm-10">
            <input name='product' value={review.product} onChange={handleOnChange} type="text" className="form-control" id="inputName3"/>
        </div>
    </div>
    <div className="row mb-3">
        <label for="inputAge3" className="col-sm-2 col-form-label">Rating</label>
        <div className="col-sm-10">
            <input name='rating' value={review.rating} onChange={handleOnChange} type="text" className="form-control" id="inputAge3"/>
        </div>
    </div>
    <div className="row mb-3">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Comment</label>
        <div className="col-sm-10">
            <input name='comment' value={review.comment} onChange={handleOnChange}  type="email" className="form-control" id="inputEmail3"/>
        </div>
    </div>
    <button  type="submit"
          className="btn btn-outline-warning m-2" onClick={handleUpdate}>Update</button>
</form> */}
    </div>
  );
}

export default reviewId


