const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;