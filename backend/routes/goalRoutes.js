const express = require('express')
const { getGoals, postGoals, updateGoal,deleteGoal } = require('../controllers/goalControllers')
const router = express.Router()

router.get('/',getGoals).post('/',postGoals)
router.put('/:id',updateGoal).delete('/:id',deleteGoal)


// router.post('/',(req,res)=>{
//     res.status(200).json({message:"post goals"})
// })

// router.put('/:id',(req,res)=>{
//     res.status(200).json({message:`updating goals ${req.params.id}`})
// })

// router.delete('/:id',(req,res)=>{
//     res.status(200).json({message:`deleting goals ${req.params.id}`})
// })

module.exports = router