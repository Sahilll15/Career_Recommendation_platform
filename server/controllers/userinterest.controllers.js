const Category = require('../models/category.model');
const UserInterests = require('../models/userintereset.model');
const User = require('../models/user.models')

const addInterests = async (req, res) => {
    try {
        const interests = req.body;

        const newUserInterest = await UserInterests.create(interests);

        const relatedCategory = await Category.findById(newUserInterest.interestCategory);
        if (relatedCategory && relatedCategory.tags) {
            newUserInterest.interestShownViaTags = newUserInterest.interestShownViaTags.concat(relatedCategory.tags);
        }
        const user = await User.findById(newUserInterest.user);
        await user.intrestedCategory.push(relatedCategory._id);
        await user.save()
        // Map tags from personalityTraits
        for (const trait of newUserInterest.personalityTraits) {
            const catg = await Category.findById(trait.name);
            if (catg && catg.tags) {
                newUserInterest.interestShownViaTags = newUserInterest.interestShownViaTags.concat(catg.tags);
            }
        }

        await newUserInterest.save();

        res.status(200).json(newUserInterest);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
}


module.exports = {addInterests}