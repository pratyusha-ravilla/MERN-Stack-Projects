import express from 'express'

import Doctor from '../model/doctor.model'

const router= express.Router()

//when i say a / in products route /api/v1/products, localhost:5000 
router.route('/').get((req,res)=>{
    Doctor.find()
    .then(doctors=>res.json(doctors))
    .catch(err=>res.status(400).json(err))
})

//api/v1/products/add  -post
router.route('/add').post((req,res)=>{

    const name=req.body.name
    const price=req.body.price
    const newDoctor =  new Doctor({name,price})

    newDoctor.save()
    .then(()=>res.json('Doctor added'))
    .catch(err=>res.status(400).json(err))

})

//api/v1/products
router.route('/:id').get((req,res)=>{
    Doctor.findById(req.params.id)
    .then((doctor)=>res.json(doctor))
    .catch(err=>res.status(400).json(err))

})


router.route('/:id').delete((req,res)=>{
    Doctor.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:'Doctor deleted'}))
    .catch(err=>res.status(400).json(err))
    
})


router.route('/:id').put((req,res)=>{
    Doctor.findById(req.params.id)
    .then((doctor)=>{
        doctor.name=req.body.name
        doctor.price=req.body.price

        doctor.save()
        .then(()=>res.json({msg:'Doctor successfully updated'}))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))})

export default router