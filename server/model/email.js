import mongoose from "mongoose";

const emailDetail = mongoose.Schema({
    from:{
        type: String,
        required: true
    },

    to:{
        type: String,
        required: true
    },

    subject: String,

    body: String,

    starred:{
        type:Boolean,
        default:false
    },

    bin:{
        type:Boolean,
        default:false
    },

    date: {
        type:Date,
        required:false
    }
})

const Email = mongoose.model('Emails',emailDetail)

export default Email;