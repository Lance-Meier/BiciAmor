const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");
const userSchema = new require("mongoose").Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    events: [
        {
        eventId:Schema.Types.ObjectId
    }
    ],
    products: [
        {
        productId:Schema.Types.ObjectId
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