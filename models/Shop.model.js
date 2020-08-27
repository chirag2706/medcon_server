const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name:{type:String,required:true},
    email_id:{type:String},
    password:{type:String},
    address:{type:String},
    location:[
        {type:Schema.Types.Number},
        {type:Schema.Types.Number}
    ],
    licence:{type:String},
    phone:{type:String},
    booking_current:[{
        type:Schema.Types.ObjectId,
        ref:'bookings'
    }],
    booking_history:[{
        type:Schema.Types.ObjectId,
        ref:'bookings'
    }],
    medicines:[{
        type:Schema.Types.ObjectId,
        // status:{type:Boolean},
        ref:'medicines'
    }]
},{
    timestamps:true
});

const Shops = mongoose.model('shops',shopSchema);

module.exports = Shops