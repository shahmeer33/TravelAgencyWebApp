import React, { useState } from "react";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  // reviews list
  const [reviews, setReviews] = useState([]);

  // kitne reviews dikhane hain
  const [visibleReviews, setVisibleReviews] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    // naya review object
    const newReview = { name, rating, review };
    setReviews([...reviews, newReview]);

    // form reset
    setName("");
    setEmail("");
    setReview("");
    setRating(0);

    alert("Review submitted successfully!");
  };

  const handleShowMore = () => {
    setVisibleReviews((prev) => prev + 5); // agle 5 reviews dikhayega
  };

  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-white p-6 ml-35">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full mb-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Share Your Review
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Your Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className={`w-8 h-8 cursor-pointer transition ${
                  star <= (hover || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Your Review
          </label>
          <textarea
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-500"
            rows="4"
            placeholder="Write your review..."
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl shadow-lg transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-4">All Reviews:</h3>
        {reviews.slice(0, visibleReviews).map((rev, index) => (
          <div key={index} className="p-4 mb-3 bg-gray-50">
            <p className="font-bold">{rev.name}</p>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= rev.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p>{rev.review}</p>
          </div>
        ))}

        {/* Show More Button */}
        {visibleReviews < reviews.length && (
          <button
            onClick={handleShowMore}
            className="mt-2 text-cyan-600 font-semibold hover:underline"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
