import React ,{useEffect,useState} from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import { getDoctorsById ,deleteDoctor} from '../Services/DoctorServices'
const Doctor = () => {
  let {id} =useParams();  
  let navigate = useNavigate()

  let [doctor,setDoctor] =useState({})

  useEffect(()=>
  {getDoctorsById((id)).then(res=>setDoctor(res))},
  [id])


  const delDoctor=()=>{
    deleteDoctor(id).then(res=>navigate('/doctors'))
  }

  return (
    <div><h1>
      Name {doctor.name}
      price {doctor.price}</h1>

      <button onClick={delDoctor}>DELETE</button>
    </div>
  )
}

export default Doctor