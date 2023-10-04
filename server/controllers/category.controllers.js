const Category = require('../models/category.model');


const createCategory = async (req, res) => {
    try {
        const { name, description, relatedSkills } = req.body;

        if (!name) {
            res.status(400).json({ message: "Category name is required" });
            return;
        }

        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            res.status(400).json({ message: "Category name must be unique" });
            return;
        }

        const newCategory = await Category.create({
            name,
            description,
            relatedSkills
        });

        

        res.status(201).json({ message: "New category created", category: newCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
};



const listAllCategories = async(req,res) => {
    const categoriesList = await Category.find({});
    res.status(200).json(categoriesList);
}

const insertManyCategories = async (req, res) => {
    try {
        const categories = req.body; 

        if (!Array.isArray(categories) || categories.length === 0) {
            res.status(400).json({ message: "Invalid or empty category data" });
            return;
        }
        const insertedCategories = await Category.insertMany(categories);

        res.status(201).json({ message: "Categories inserted", categories: insertedCategories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Something went wrong: ${error.message}` });
    }
};

module.exports = {createCategory, listAllCategories,insertManyCategories}