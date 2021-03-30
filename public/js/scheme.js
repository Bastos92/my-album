const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myAlbum', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    // console.log('db connected');
}).catch(err => {
    console.log(err);
});

const albumSchema = new mongoose.Schema({
    fileName: String,
    title: String,
    author: String,
    location: String,
});

const Picture = mongoose.model('Albums', albumSchema);

Picture.find({ author: { $regex: 'faralley', $options: 'i'} }, function(err, docs) {
    if (docs.length) {
        docs.forEach(doc => {
            doc.deleteOne({ _id: doc._id })
        });
    }
});

for (let i = 0; i < 12; i++) {
    let addPicture = new Picture({
        fileName: "seeder/" +(i + 1 < 10 ? '0' : '') + (i + 1) + "-img.jpg",
        title: "Beautiful picture - " + (i + 1),
        author: "Toby Faralley - " + (i + 1),
        location: "Groningen - " + (i + 1)
    })

    addPicture.save();
}

console.log('Bernard is great!')