const fs = require('fs');
const path = require('path');
 
const contactlocation = path.join(__dirname,"contacts.json");

const getContacts = ()=>{
    const contacts = fs.readFileSync(contactlocation).toString();
    return JSON.parse(contacts);
}
const saveContacts= (contacts)=>{
fs.writeFileSync(contactlocation,JSON.stringify(contacts,null,2))
}
module.exports = {contactlocation, getContacts, saveContacts};