const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI  || 'mongodb+srv://melwang1:giraffecamO2@cluster0.8xqpssp.mongodb.net/', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true, 
    // useFindAndModify: true,

module.exports = mongoose.connection;

//add
 //mongodb+srv://melwang1:<password>@cluster0.8xqpssp.mongodb.net/

 //mongodb://127.0.0.1:27017/googlebooks