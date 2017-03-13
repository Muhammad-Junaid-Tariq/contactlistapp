/**
 * Created by Muhammad Junaid on 1/23/2017.
 */
var mongoschema = require("mongoose");

module.exports = mongoschema.model("person",{

    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    number:{
        type:Number
    }
});