require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002
const plantsController = require('./controllers/plants')  
const journalEntriesController = require('./controllers/journalEntries');
//const userController = require('./controllers/users');
//const commentsController = require('./controllers/comments');

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/plantlist', plantsController);
app.use('/journal', journalEntriesController);
//app.use('', userController);
//app.use('', commentsController);

app.get('/*', (req, res) => {
    res.json({comment: "OOPS, this is a bad URL"});
})

app.listen(PORT, () => {
    console.log(`$ Server is listening on PORT ${PORT}`);
})



