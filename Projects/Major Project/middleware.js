const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema} = require("./schema.js");

module.exports.islLoggedIn =(req, res, next) => {
    if(!req.isAuthenticated()){
      req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged into create listing!");
        return res.redirect("/login");
      }
     next();
};

module.exports.savedRedirectUrl = (req, res, next) => {
  if(req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
      let listing = await Listing.findById(id);
      if(!listing.owner.equals(res.locals.currUser._id.toString())) {
        req.flash("error", "You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
      }

      next();
};

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw  new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) { 
    let errMsg = error.details.map((el) => el.message).join(",");
    throw  new ExpressError(400, errMsg);
  } else {
    next();
  }
};