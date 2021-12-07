const express = require("express")
const app = express();
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const fetchDataRouter = require('./routers/fetchData');
const { addMessage } = require("./controllers/fetchData");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/fetchData', fetchDataRouter)
app.post('/addMessage', (req, res) => {
    const { message, username } = req.body
    if (!message || !username) return res.status(400).send('not good')
    addMessage(message, username)
    res.status(200).send('all good')
})



app.listen(port, () => {
    console.log(`running on ${port}`);
});