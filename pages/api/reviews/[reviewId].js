import { reviews } from "@component/data/reviews";

export default function handler(req, res) {
    if (req.method == "GET") {
        const review = reviews.find(({ id }) => id === parseInt(req.query.id));
        res.status(200).json(review)
    }
    else if (req.method === "PUT") {
        const { reviewId } = req.query;
        const { product, rating, comment,user } = req.body;
        const idx = reviews.findIndex((r) => r.id === parseInt(reviewId));
        if (idx !== -1) {
            const updateReview = {
                id: parseInt(reviewId),
                product: product || reviews[idx].product,
                rating: rating != null ? rating : reviews[idx].rating,
                comment: comment || reviews[idx].comment,
                user: user || reviews[idx].user
            };
            reviews[idx] = updateReview;
            res.status(200).json(updateReview);
        } else {
            res.status(404).json({ error: "Review not found" });
        }
    }
    // else if (req.method === "PUT") {
    //     const { reviewId } = req.query;
    //     const { product, rating, comment } = req.body;
    //     console.log(req.body);
    //     const idx = reviews.findIndex((r) => r.id === (reviewId));
    //     console.log('====================================');
    //     console.log(idx);
    //     console.log('====================================');
    //     const updateReview = {
    //         // id: reviewId,
    //         product: product,
    //         rating: rating ,
    //         comment: comment ,
    //     };
    //     reviews[idx] =  updateReview;
    //     // Update the existing review with new data or create a new one
    //     // if (updateReview) {
    //     //     review.product = product || review.product;
    //     //     review.rating = rating != null ? rating : review.rating;
    //     //     review.comment = comment || review.comment;
    //     // } else {
    //     //     reviews.push({ id: reviews.length + 1, product, rating, comment });
    //     // }
    //     return res.status(200).json(updateReview);
    //     // return res.status(200).json({ message: `${review.id ? "Modified" : "Created"} review successfully!` });
        
    //     // return res.status(200).json({ message: !review ? 'Review added' : 'Review updated', review });
    // }
    else if (req.method === "DELETE") { 
        // console.log(req.query)
        const {reviewId}=req.query
        const deletedReview= reviews.find((r)=>r.id===(reviewId))
        const idx = reviews.findIndex((r) => r.id === (reviewId));
        reviews.splice(idx,1)
        res.status(200).json(deletedReview)
        // console.log(commments.filter((item)=>item.id!==reviewId))
        // commments=commments.filter((item)=>item.id!==reviewId)
    }
}