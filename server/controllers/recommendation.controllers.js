const Article = require('../models/articles.model');
const Category = require('../models/category.model');
const User = require('../models/user.models');
const UserInterests = require('../models/userintereset.model');

function recommendArticles(userProfile, articles) {
    const recommendedArticles = [];

    for (const article of articles) {
        let relevanceScore = 0;

        for (const interest of userProfile.interestCategory) {
            if (article.relatedCategory.equals(interest)) {
                relevanceScore++;
            }
        }

        for (const interest of userProfile.personalityTraits) {
            if (article.tags.includes(interest.name)) {
                relevanceScore += interest.score;
            }
        }

        for (const interest of userProfile.interestShownViaTags) {
            if (article.tags.includes(interest)) {
                relevanceScore++;
            }
        }

        if (relevanceScore > 0) {
            recommendedArticles.push({
                article: article,
                relevanceScore: relevanceScore,
            });
        }
    }

    recommendedArticles.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return recommendedArticles.map((item) => item.article);
}

const getRecmndArticles = async (req, res) => {
    try {
        const userId = req.params.id;
        const userInterests = await UserInterests.findOne({ user: userId });
        if (!userInterests) {
            res.status(404).json({ message: "Interests do not exist for this user." });
            return;
        }

        const tech_articles = await Article.find({});

        const rcmnd_tech_articles = recommendArticles(userInterests, tech_articles);

        res.status(200).json(rcmnd_tech_articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}

module.exports = { getRecmndArticles };
