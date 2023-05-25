const mongoose = require('mongoose');

const plantsSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, 'This field is required.'],
        },

        variety: {
            type: String,
            unique: true,
            default: "Unknown"
        },

        scientificName: {
            type: String,
            unique: true,
        },

        growTime: {
            type: String,
        },

        sunRequirements: {
            type: String
        },

        commonPests: {
            type: String
        },

        bestCompanionPlants: {
            type: String
        }
    }
);

const Plants = mongoose.model('plant', plantsSchema);

module.exports = Plants;