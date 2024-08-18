const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const  Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, islLoggedIn,} = require("../middleware.js");


const reviewController = require ("../controllers/reviews.js");



//Post Review Route

router.post(
  "/",
   islLoggedIn, validateReview,
   wrapAsync(reviewController.createReview));
  
  // Delete Review route
  
  router.delete(
    "/:reviewId",
    islLoggedIn,
    wrapAsync(reviewController.deleteReview));

  module.exports = router;
  