//Event Model
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const EventSchema = Schema({
  createdBy: { type: Schema.Types.ObjectId,  ref: 'User'},
  name: String,
  description: String,
  date:     {
    type:Date,
    default: new Date()
  },
  location: Array,
  image: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;