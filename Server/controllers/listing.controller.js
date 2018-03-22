const Listing = require("../models/Listing");

exports.deleteListing = (req,res,next)=>{
  if(req.user._id == req.params.createdBy){
  Listing.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
} else {
  res.status(401).json({message:`You aren't authorized to update this listing`})
  }
}

exports.patchListing = (req,res,next)=>{
  if(req.user._id == req.params.createdBy){
  Listing.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
} else {
  res.status(401).json({message:`You aren't authorized to update this listing`})
  }
}

exports.getListings = (req, res, next)=>{
  Listing.find({}).sort({_id:-1})
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

exports.getSingleListing = (req, res, next)=>{
  Listing.findById(req.params.id)
    .then(singleListing=>res.status(200).json(singleListing))
    .catch(e=>res.status(500).send(e));
  }

  exports.postListing = (req, res, next)=>{
    const newListing = new Listing ({
      createdBy: req.user._id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      location: req.body.location,
    });

    newListing.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }