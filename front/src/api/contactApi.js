import axios from 'axios'




//===>  http://localhost:4000/contact/getcontact
export const fetchAllcontact= async()=>
{
    const {data}= await axios.get('http://localhost:4000/contact/getcontact')

return data

}

//===> http://localhost:4000/contact/addcontact
export const  postContact=async(values)=>{
    const Addcontact= await axios.post('http://localhost:4000/contact/addcontact',{...values})
}

//===>  http://localhost:4000/contact/updatecontact/:id
export const  updatecontact=async(id,values)=>{
const Updatecontact= await axios.put('http://localhost:4000/contact/updatecontact/${id}',values)
}


//===>  http://localhost:4000/contact/deletecontact/:id
export const  deleteContact=async(id)=>{
    const deletecontact= await axios.delete('http://localhost:4000/contact/deletecontact/${id}')
    }

        //===>  http://localhost:4000/contact/getUnqcontact/:id
    export const getUnqContact=async(id,values)=>{
        const {data} = await axios.get('/http://localhost:4000/contact/getUnqcontact/${id}',values)
  return data
    }
