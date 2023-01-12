const router = require("express").Router();
const axios = require("axios");
const NewsIn = require('../models/NewsSc')
require("dotenv").config();

const API = process.env.API_KEY;


const getNewsApi = async () => {
    try {
        const data = await axios.get(
            "https://newsapi.org/v2/top-headlines?sources=bbc-news,abc-news,bbc-sport,espn,business-insider,buzzfeed,cnbc,cnn&apiKey=`${API}`",
        )
        var newsdata = await data.data.articles.map(x => (
            NewsIn.create({
                source: x.source,
                author: x.author,
                title: x.title,
                description: x.description,
                url: x.url,
                urlToImage: x.urlToImage,
                publishedAt: x.publishedAt,
                content: x.content
            })
        ))
        // console.log("gggg", newsdata)
    } catch (err) { console.log("api axios er = ", err) }
}

setInterval(getNewsApi, 1000 * 60 * 60 * 24)

router.get('/api', async (req, res) => {
    try {
        const q = req.query
        // const data = await NewsIn.find({author:Object.values(q).toString().split(',')})
        const data = await NewsIn.find({ 'source.name': Object.values(q).toString().split(',') })
        res.json(data)
        // console.log('its ',Object.values(q).toString().split(','))
    } catch (error) {
        console.log("to web api err = ", error)
    }
})
module.exports = router;
