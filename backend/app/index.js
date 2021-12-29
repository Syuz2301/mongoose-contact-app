const express = require("express");
const router = express.Router();
const Contact = require('./models/contact');
const validateMiddleware = require('./helpers');


 
router.get('/contacts', (req, res) => {
    Contact.find({}, (err, data) => {
        if(err) return res.json(err.message);
        res.send(data);
    });
});


router.post('/contacts', validateMiddleware, (req, res) => {
    const { name, phone } = req.body.contact;
    Contact.find({}, (err, docs) => {
        if(err) throw err;
        const contactExists = 
        docs.find(item => item.name === name && item.phone === phone);
        if(!contactExists) {
            const newContact = new Contact(req.body.contact);
            newContact.save((err, data) => {
                if(err) return res.json(err.message);
                return  res.status(201).send(data);
            });
        } else {
            res.status(403).json({ msg: "contact already exists" });
        }
    });
});


router.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    Contact.findById(id, (err, contact) => {
        if(err) { 
            return res.status(404).json(err.message);
        }
        contact.remove(() => {
            res.json({msg: "deleted successfully"});
        });
    });
});


router.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    Contact.findById(id, (err, contact) => {
           if(err) return res.json(err.message);
           res.send(contact);
    });
});


router.put('/contacts/:id', validateMiddleware, (req, res) => {
    const { id } = req.params;
    const { phone, name } = req.body.contact;
    Contact.findById(id, (err, contact) => {
        if(err) return res.json(err.message);
        contact._id = id,
        contact.name = name,
        contact.phone = phone,
        contact.save((err, data) => {
          if(err) return res.json(err.message);
          res.send(data);
        });
    });
});



module.exports = router;