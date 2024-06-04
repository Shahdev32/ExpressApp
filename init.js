const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



 allChats= [
    {
        from: "neha",
        to: "priya",
        msg:"send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "raja",
        to: "priya1",
        msg:"send me your exams sheets",
        created_at: new Date(),
    },
    {
        from: "neha2",
        to: "priya2",
        msg:"send me your examss sheets",
        created_at: new Date(),
    },


 ];


 Chat.insertMany(allChats);




