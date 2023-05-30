const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema(
    {
        month: {
            type: String,
            required: [true, 'This field is required.']
        },
        year: {
            type: Number,
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