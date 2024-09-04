const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://tsast2023:veinedevie2023@cluster0.yrehc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
console.log("DB connected!");
}).catch((err)=>console.log(err));