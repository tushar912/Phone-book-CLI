const fs = require('fs');
const path = require('path');
 
const contactlocation = path.join(__dirname,"contacts.json");

const getContacts = ()=>{
    const contacts = fs.readFileSync(contacts).toString();
    return JSON.parse(contacts);
}
const saveContacts= (contacts)=>{
fs.readFileSync(contactlocation,JSON.stringify(contacts,null,2))
}
module.exports = {contactsLocation, getContacts, saveContacts};