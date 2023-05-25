const express = require('express');
const router = express.Router();
const { Plants } = require('../models');

const seededData = [
    {
        type: "Tomato",
        variety: "Roma",
        scientificName: "Solanum lycopersicum",
        growTime: "60-80 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Tomato Hornworms, Whiteflies",
        bestCompanionPlants: "Basil, Marigold, Parsley"
    },
    {
        type: "Cucumber",
        variety: "Marketmore 76",
        scientificName: "Cucumis sativus",
        growTime: "50-70 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Cucumber Beetles, Powdery Mildew",
        bestCompanionPlants: "Beans, Peas, Raddish"
    },
    {
        type: "Zucchini",
        variety: "Black Beauty",
        scientificName: "Cucurbita pepo",
        growTime: "45-55 days",
        sunRequirements: "Full Sun",
        commonPests: "Squash Bugs, Cucumber Beetles, Powdery Mildew",
        bestCompanionPlants: "Nasturtiums, Corn, Beans"
    },
    {
        type: "Peppers",
        variety: "Bell Pepper",
        scientificName: "Capsicum spp.",
        growTime: "60-85 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Pepper Maggots, Spider Mites",
        bestCompanionPlants: "Basil, Tomatoes, Onions"
    },
    {
        type: "Beans",
        variety: "Provider",
        scientificName: "Phaseolus spp.",
        growTime: "50-60 days",
        sunRequirements: "Full Sun",
        commonPests: "Mexican Bean Beetles, Aphids, Bean Weevils",
        bestCompanionPlants: "Carrots, Cucumbers, Corn"
    },
    {
        type: "Carrots",
        variety: "Nantes",
        scientificName: "Daucus carota",
        growTime: "60-80 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Carrot Rust Flies, Aphids, Wireworms",
        bestCompanionPlants: "Onions, Leeks, Lettuce"
    },
    {
        type: "Lettuce",
        variety: "Butterhead",
        scientificName: "Lacuca sativa",
        growTime: "45-55 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Slugs, Snails, Aphids",
        bestCompanionPlants: "Carrots, Radishes, Onions"
    },
    {
        type: "Radishes",
        variety: "Cherry Belle",
        scientificName: "Raphanus sativus",
        growTime: "20-30 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Fly Beetles, Root Maggots, Aphids",
        bestCompanionPlants: "Spinach, Lettuce, Cucumbers"
    },
    {
        type: "Spinach",
        variety: "Bloomsdale",
        scientificName: "Spinacia Oleracea",
        growTime: "40-50 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Leafminers, Aphids, Slugs",
        bestCompanionPlants: "Strawberries, Onions, Peas"
    },
    {
        type: "Corn",
        variety: "Golden Bantam",
        scientificName: "Zea mays",
        growTime: "60-90 days",
        sunRequirements: "Full Sun",
        commonPests: "Corn Earworms, Armyworms, Corn Borers",
        bestCompanionPlants: "Beans, Cucumbers, Squash"
    },
    {
        type: "Lavender",
        variety: "English Lavender",
        scientificName: "Lavandula angustifolia",
        growTime: "90-120 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Spider Mites, Root Rot",
        bestCompanionPlants: "Rosemary, Sage, Ornamental Grasses"
    },
    {
        type: "Daylillies",
        variety: "Stella de Oro",
        scientificName: "Hemerocallis spp.",
        growTime: "Varies",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Slugs, Snails, Aphids",
        bestCompanionPlants: "Coneflowers, Hostas, Ornamental Grasses"
    },
    {
        type: "Peonies",
        variety: "Sarah Bernhardt",
        scientificName: "Paeonia spp.",
        growTime: "2-3 years for mature blooms.",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Botrytis Blight, Nematodes, Peony Wilt",
        bestCompanionPlants: "Iris, Catmint, Alliums"
    },
    {
        type: "Black-Eyed Susan",
        variety: "Goldsturm",
        scientificName: "Rudbeckia fulgida",
        growTime: "60-90 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Japanese Beetles, Aphids, Powdery Mildew",
        bestCompanionPlants: "Echinacea, Ornamental Grasses, Sedum"
    },
    {
        type: "Russian Sage",
        variety: "Blue Spire",
        scientificName: "Perovskia atriplicifolia",
        growTime: "90-120 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Spider Mites, Powdery Mildew",
        bestCompanionPlants: "Coneflowers, Ornamental Grasses, Salvia"
    },
    {
        type: "Hostas",
        variety: "Frances Williams",
        scientificName: "Hosta spp.",
        growTime: "Varies",
        sunRequirements: "Partial Shade to Full Shade",
        commonPests: "Slugs, Snails, Deer Browsing",
        bestCompanionPlants: "Ferns, Astilbes, Heucheras"
    },
    {
        type: "Coneflowers",
        variety: "Purple Coneflower",
        scientificName: "Echinacea purpurea",
        growTime: "90-120 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Japanese Beetles, Aphids, Powdery Mildew",
        bestCompanionPlants: "Black-Eyed Susans, Ornamental Grasses, Salvia"
    },
    {
        type: "Bee Balm",
        variety: "Jacob Cline",
        scientificName: "Monarda spp.",
        growTime: "60-90 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Spider Mites, Powdery Mildew, Rust",
        bestCompanionPlants: "Agastache, Phlox, Rudbeckia"
    },
    {
        type: "Sedum",
        variety: "Autumn Joy",
        scientificName: "Sedum spectabile",
        growTime: "60-90 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids",
        bestCompanionPlants: "Ornamental Grasses, Coneflowers, Black-Eyed Susans"
    },
    {
        type: "Asparagus",
        variety: "Mary Washington",
        scientificName: "Asparagus officianalis",
        growTime: "2-3 years for mature harvest",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Asparagus Beetle, Aphids, Slugs",
        bestCompanionPlants: "Tomatoes, Parsley, Marigold"
    },
    {
        type: "Rhubarb",
        variety: "Victoria",
        scientificName: "Rheum rhabarbarum",
        growTime: "2-3 years for mature harvest",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Snails, Slugs, Rhubarb Curculio",
        bestCompanionPlants: "Strawberries, Chives, Garlic"
    },
    {
        type: "Artichoke",
        variety: "Green Globe",
        scientificName: "Cynara cardunculus",
        growTime: "85-100 days",
        sunRequirements: "Full Sun",
        commonPests: "Aphids, Slugs, Earwigs",
        bestCompanionPlants: "Marjoram, Tarragon, Nasturtiums"
    },
    {
        type: "Raspberry",
        variety: "Heritage",
        scientificName: "Rubus spp.",
        growTime: "Varies",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Raspberry Cane Borers, Aphids, Japanese Beetles",
        bestCompanionPlants: "Chives, Garlic, Marigolds"
    },
    {
        type: "Strawberry",
        variety: "Eversweet",
        scientificName: "Fragaria spp.",
        growTime: "4-6 weeks",
        sunRequirements: "Full Sun",
        commonPests: "Slugs, Snails, Strawberry Weevils",
        bestCompanionPlants: "Borage, Thyme, Lettuce"
    },
    {
        type: "Horseradish",
        variety: "NA (Commonly grown from root cuttings)",
        scientificName: "Armoracia rusticana",
        growTime: "1 year to mature harvest",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Aphids, Flea Beetles, Horseradish Root Fly",
        bestCompanionPlants: "Marigolds, Tansy, Yarrow"
    },
    {
        type: "Egyptian Walking Onion",
        variety: "NA (Single Variety)",
        scientificName: "Allium proliferum",
        growTime: "varies by division or bulb planting",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Onion Maggots, Thrips, Rust",
        bestCompanionPlants: "Carrots, Chamomile, Lettuce"
    },
    {
        type: "Chives",
        variety: "NA (Single Variety)",
        scientificName: "Allium schoenoprasum",
        growTime: "60-80 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Aphids, Onion Maggots, Thrips",
        bestCompanionPlants: "Carrots, Tomatoes, Beets"
    },
    {
        type: "Lovage",
        variety: "NA (Single Variety)",
        scientificName: "Levisticum officinale",
        growTime: "60-80 days",
        sunRequirements: "Full Sun to Partial Shade",
        commonPests: "Aphids, Leaf Miners, Slugs",
        bestCompanionPlants: "Beans, Tomatoes, Celery"
    },
]

router.get('/seed', async (req, res, next) => {
    try {
        await Plants.deleteMany({}),
        await Plants.insertMany(seededData);
        res.redirect('/plantlist');
    } catch(err) {
        next();
    }
})

router.get('', async (req, res, next) => {
    try {
        let myPlants;
        console.log(req.query);
        if(req.query.search) {
            myPlants = await Plants.find({type: req.query.search})
            console.log(myPlants);
        } else {
            myPlants = await Plants.find({});
            console.log(myPlants);
        }
        res.json(myPlants);
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;