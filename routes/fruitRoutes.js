const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit")

//get all fruits
router.get('/', async (req,res)=>{
   const allFruit = await Fruit.find({});
   console.log(allFruit);
   res.json(allFruit);
})

//create a new fruit
router.post('/', async (req, res) => {
    try {
        const newFruit = await Fruit.create(req.body);
        console.log(newFruit);
        res.json(newFruit);
    } catch(error){
        console.log(`Something went wrong loading seed data: ${error.message}`);
    }
})



//show fruit - get 1 fruit

router.get("/:id", async (req,res) => {
    try {
        const singleFruit =  await Fruit.findById(req.params.id);
        res.json(singleFruit);   
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedFruit)
    } catch (error){
        res.status(500). json({error: error.message});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedFruit = await Fruit.findByIdAndDelete(req.params.id)
        res.json(deletedFruit);    
    } catch (error) {
        res.status(500).json({error: error.message});        
    }  
})

module.exports = router;