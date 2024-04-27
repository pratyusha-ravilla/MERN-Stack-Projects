import React ,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoctorById,updateDoctor } from '../../services/DoctorServices'


const updateDoctor = () => {
let navigate=useNavigate()
let {id}=useParams();
let [doctor,setDoctor] =useState({name:'',price:0})

  //re-rendering phase
  useEffect(()=>
  {getDoctorById((id)).then(res=>setDoctor(res))},
  [id])


  const handleChange=(event)=>{
    let {name,value} =event.target
    let newDoctor = {...doctor,[name]:value}
    console.log(JSON.stringify(newDoctor))
    setDoctor(newDoctor)
   }


   const submitHandler=(event)=>{
    event.preventDefault()
    console.log(`product in submit handler ${doctor.name}`)
    updateDoctor(id,doctor).then(res=>navigate('/doctors'))
   }

    return (
        <div className='container m-3'>
          <h3>Update Doctor</h3>
          <form onSubmit={submitHandler}>
            <div className='m-3'>
                <div className='m-5'>
                    <input type='text' className='form-control' 
                    name='name' 
                    value={doctor.name}
                    onChange={handleChange}
                    placeholder='Enter doctor name'/>
    
    
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
                        className='btn btn-primary'>Update Product</button>
                    </div>
                </div>
            </div>
    
          </form>
        </div>
      )
}

export default updateDoctor