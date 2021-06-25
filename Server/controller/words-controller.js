const express = require("express");
var randomWords = require("random-words");
//  const wordsLogic = require("../business-logic-layer/contact-logic");
// const ContactModel = require("../models/contact-model");

const router = express.Router();

// console.log(randomWords({ exactly: 1, maxLength: 4 }))

// GET http://localhost:4000/api/words
router.get("/", async (request, response) => {
  try {
    const word = await randomWords({ exactly: 1, maxLength: 4 });
    const extract = word[0];
    extract.replace(/"/g, "");
    console.log(extract.length);
    response.send(extract);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// // POST http://localhost:3000/api/contacts
// router.post("/", async (request, response) => {
//     try {
//         const contact = request.body;
//         if( !contact.fullName ||!contact.mail ||!contact.phone || !contact.address){
//             response.status(401).send("missing a field, try again")
//             throw("missing a field, try again")
//         }
//         const errors = ContactModel.validate(contact);
//         if (errors) {
//             response.status(400).send(errors);
//             return;
//         }

//         const addedContact = await contactsLogic.addContactAsync(contact);
//         response.status(201).json(addedContact);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

module.exports = router;
