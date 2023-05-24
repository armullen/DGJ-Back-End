const mongoose = require('mongoose');
const user = require('./Users');

const plantsSchema = new mongoose.Schema (
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

const PlantList = mongoose.model('SeedData', plantsSchema);

module.exports = PlantList;