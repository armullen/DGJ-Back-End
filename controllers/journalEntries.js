const express = require('express');
const router = express.Router();
const { JournalEntries } = require('../models');

const seededData = [
    {
        month: "January",
        year: "2023",
        notes: "Your journal notes go here."
    }
]

// ............... seeded route ...................

router.get('/seed', async (req, res, next) => {
    try {
        await JournalEntries.deleteMany({}),
        await JournalEntries.insertMany(seededData);
        res.redirect('/journal');
    } catch(err) {
        next();
    }
})

// ................. index route .....................

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

// ................. add route .....................

router.post('', async (req, res, next) => {
    try {
        const newJournalEntry = req.body
        await JournalEntries.create(req.body);
        console.log(newJournalEntry);
        res.json(newJournalEntry)
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;