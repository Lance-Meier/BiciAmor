//User Model
const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    facebookId: {
        type:String
    },
    googleId: {
        type:String
    },
    myEvents: [
        {
        eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
    }
    ],
    myListings: [
        {
        listingId: { type: Schema.Types.ObjectId, ref: 'Listing' },
    }
    ],
    roles:{
        type:String,
        enum:["USER", "ADMIN"],
        default:"USER"
    }
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
userSchema.plugin(PassportLocalMongoose, {usernameField:"email"})
module.exports = require("mongoose").model("User", userSchema);