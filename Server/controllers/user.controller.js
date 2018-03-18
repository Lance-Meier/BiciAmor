const User = require("../models/User");

exports.getUser = (req, res, next)=>{
  User.findById(req.params.id)
    .then(item=>res.status(200).json(item))
    .catch(e=>res.status(500).send(e));
  }

exports.patchUser = (req,res,next)=>{
  if(req.user._id == req.params.id) {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
} else{
  res.status(401).json({message:`You aren't authorized to update this user`})
  }
}
exports.deleteUser= (req,res,next)=>{
  if(req.user._id == req.params.id) {
  User.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .then(res.redirect('/'))
  .catch(e=>res.status(500).send(e));
} else{
  res.status(401).json({message:`You aren't authorized to delete this user`})
  }
}