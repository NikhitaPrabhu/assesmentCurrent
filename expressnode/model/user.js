var mongoose = require('mongoose')

var mongoSchema = mongoose.Schema

var userSchema = new mongoSchema({

    "username":String,
    "profileimg":String,
    "content":[{
        "id":Number,
        "name": String,
        "description" : String,
        "downvote" : Number,
        "media" : String,
        "Nocomments" : Number,
        "mediaType" : String
    }
    ]

})

module.exports = mongoose.model('mycollections', userSchema )