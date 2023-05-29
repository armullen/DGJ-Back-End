const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'This field is required.']
        },

        notes: {
            type: String,
            required: [true, 'This field is required.']
        }
    }
);

const JournalEntries = mongoose.model('journalEntry', journalSchema);

module.exports = JournalEntries;