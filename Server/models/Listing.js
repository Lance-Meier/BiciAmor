// Listing Model
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ListingSchema = Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  description: String,
  price: String,
  image: String,
  location: String,
},
{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
}
);

const Item = mongoose.model('Listing', ListingSchema);

module.exports = Item;