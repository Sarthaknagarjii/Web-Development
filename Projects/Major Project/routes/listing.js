const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, islLoggedIn,isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload =  multer({ storage}); 


router
.route("/")
.get(wrapAsync(listingController.index))
.post(
  islLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing));

  //New Route
router.get("/new", islLoggedIn, listingController.renderNewform );

router
.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
  islLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
)
.delete(
  islLoggedIn,
  wrapAsync(listingController.deleteListing));
 
  
  
  //Edit Route
  router.get(
    "/:id/edit",
    islLoggedIn,
    isOwner,
    wrapAsync(listingController.editListing));
  
  
  module.exports = router;