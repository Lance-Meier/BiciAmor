const Event = require("../models/Event");

exports.deleteEvent = (req,res,next)=>{
  if(req.user._id == req.params.createdBy){
  Event.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
} else {
  res.status(401).json({message:`You aren't authorized to update this event`})
  }
}

exports.patchEvent = (req,res,next)=>{
  if(req.user._id == req.params.createdBy){
  Event.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
} else {
  res.status(401).json({message:`You aren't authorized to update this event`})
  }
}

exports.getEvents = (req, res, next)=>{
  Event.find()
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.getSingleEvent = (req, res, next)=>{
  Event.findById(req.params.id)
  .then(singleEvent=>res.status(200).json(singleEvent))
  .catch(e=>res.status(500).send(e));
}

exports.postEvent = (req, res, next)=>{
  const newEvent = new Event ({
    createdBy: req.user._id,
    name: req.body.name,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    image: req.body.image,
  });

  newEvent.save()
  .then(item=>res.status(201).json(item))
  .catch(e=>res.status(500).send(e));

}