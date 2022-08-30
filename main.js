console.log("ca marche");

let firstname = "Julie";
let last = "Lapierre";
let sex = 1;//woman
let nom = firstname+ " " + last;
if (sex==1){
    console.log(`Hello miss ${nom}`);
}
else{
    console.log(`Hello mrs ${nom}`);
}

const Contact = require("./atelier-1/contact.js");
let contact = new Contact("Nicolas","nicolas@gmail.com","(514-333-5656");
console.log(contact);

const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req);

});
const Port = process.env.Port || 5000;
server.listen(Port,()=>console.log(`server running on port ${Port}`));