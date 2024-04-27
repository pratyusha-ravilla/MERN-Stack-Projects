// let BASE_URL="http://localhost:5000/api/v1/products"

export async function getDoctors(){
    const response = await fetch(`${BASE_URL}`)
    const doctors =  await response.json()
    console.log(doctors)
    return doctors

}

export async function getDoctorsById(id){

    const response = await fetch(`${BASE_URL}/${id}`)
    const doctor =  await response.json()
    console.log(doctor)
    return doctor
    
}

export async function addDoctor(product){
    let response = await fetch(`${BASE_URL}/add`,
    {
        method:"POST",
        body:JSON.stringify(doctor),
        headers:{
            "Content-Type":"application/json",
        }
    })
    let newDoctor =  await response.json()
    console.log(newDoctor)
    return newDoctor
    
}

export async function deleteDoctor(id){

    let response = await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE",
    })

    let data = await response.json()
    console.log(data)
    return data;

}

export async function updateDoctor(id,product){

    let response=await fetch(`${BASE_URL}/${id}`,
    {
        method:'PUT',
        body:JSON.stringify(doctor),
        headers:{
            "Content-Type":"application/json",
        }
    })

    let updatedDoctor = await response.json()
    console.log(updatedDoctor)
    return updateDoctor
}