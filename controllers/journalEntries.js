const express = require('express');
const router = express.Router();
const { JournalEntries } = require('../models');

const seededData = [
    {
        date: "01/01/2023",
        notes: "Your journal notes go here."
    }
]

router.get('/seed', async (req, res, next) => {
    try {
        await JournalEntries.deleteMany({}),
        await JournalEntries.insertMany(seededData);
        res.redirect('/journal');
    } catch(err) {
        next();
    }
})

router.get('', async (req, res, next) => {
    try {
        let myJournal;
        console.log(req.query);
        if(req.query.search) {
            myJournal = await JournalEntries.find({type: req.query.search})
            console.log(myJournal)
        } else {
            myJournal = await JournalEntries.find({});
            console.log(myJournal);
        }
        res.json(myJournal);
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;