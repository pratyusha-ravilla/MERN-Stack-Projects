import { set } from 'mongoose'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoctor } from '../Services/DoctorServices'
const AddDoctor = () => {
    const [doctor,setDoctor]=useState({name:'',price:0})
 
    let navigate= useNavigate()
    //whenever  any input field changes 
   const handleChange=(event)=>{
    let {name,value} =event.target
    let newDoctor = {...doctor,[name]:value}

    setDoctor(newDoctor)
   }

   
   //form submission

   const submitHandler=(event)=>{
    event.preventDefault()
    AddDoctor(doctor).then(res=>navigate('/doctors'))
   }

  return (
    <div className='container m-3'>
      <h3>Add Doctor</h3>
      <form onSubmit={submitHandler}>
        <div className='m-3'>
            <div className='m-5'>
                <input type='text' className='form-control' 
                name='name' 
                value={doctor.name}
                onChange={handleChange}
                placeholder='Enter product name'/>


            </div>

            <div className='m-5'>
                <input type='text' className='form-control' 
                name='price' 
                value={doctor.price}
                onChange={handleChange}
                placeholder='Enter product price'/>


            </div>
            <div className='row text-center m-3'>
                <div className='col-12'>
                    <button type='submit'
                    className='btn btn-primary'>Add Doctor</button>
                </div>
            </div>
        </div>

      </form>
    </div>
  )
}

export default AddDoctor
