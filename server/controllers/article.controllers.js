const Article = require('../models/articles.model');

const createArticle = async(req,res) => {
    try{
        const { relatedCategory, articleName, description, relatedJobs, trendInMarket } = req.body;

        const newArticle = await Article.create({
            relatedCategory,
            articleName,
            description,
            relatedJobs,
            trendInMarket
        });

        res.status(201).json(newArticle);

    }catch(e){
        console.log(e)
        res.status(500).json({message: `Something went wrong: ${e}`});
    }
};

const listAllArticles = async (req,res) => {

    try{
        const articlesData = await Article.find({});
        res.status(200).json(articlesData)
    }catch(e){
        console.log(e)
        res.status(500).json({message: `Something went wrong: ${e}`});
    }
};



const insertManyArticles = async (req, res) => {
    try {
        const articles = req.body;

        if (!Array.isArray(articles) || articles.length === 0) {
            res.status(400).json({ message: "Invalid or empty article data" });
            return;
        }

       
        const insertedArticles = await Article.insertMany(articles);

        res.status(201).json({ message: "Articles inserted", articles: insertedArticles });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
};



module.exports = {createArticle,listAllArticles, insertManyArticles}