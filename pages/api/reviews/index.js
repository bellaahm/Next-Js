import {reviews} from "../../../data/reviews"
// import {v4 as uuid} from "uuid"
export default function handler(req,res){
    if (req.method==="GET") res.status(200).json(reviews)
    else if (req.method==="POST"){
console.log(req)
        const {review}  =req.body;
        const newReview={
            // id:Date.now(),
            id:reviews.length+1,
            comment:review
        }
        reviews.push(newReview);
        // commments=[1,2,3]
        res.status(200).json(newReview)
}
}