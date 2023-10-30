const Goals = require('../models/goalModel')
const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res)=>{
    const goals = await Goals.find()
    console.log("goals =>",goals)
    res.status(200).json(goals)
})


const postGoals = asyncHandler(async (req, res)=>{
    const name = req.body.name
    if(!name){
        res.status(400)
        throw new Error("Please add a name")
    }
    const goal = await Goals.create({name:name})
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req,res)=>{
    const goal = await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("goal not found")
    }
    const updatedGoal = await Goals.findByIdAndUpdate(req.params.id,req.body,{new : true})
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req,res)=>{
    const goal = await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("goal doesnt exist")
    }
    const deleteGoal = await goal.deleteOne()
    res.status(200).json(deleteGoal)
})

module.exports = {getGoals, postGoals, updateGoal,deleteGoal}