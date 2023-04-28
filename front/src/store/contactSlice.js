import { createSlice} from "@reduxjs/toolkit";

const contactSlice = createSlice ({
   name:"contactElement",
   initialState:[{
    name:"yosr redux",
    LastName:"redux last name", 
    age:"24",
    email:"gabsiyosr@redux.com",

   },
{
name:"hana redux",
    LastName:"redux last name", 
    age:"30",
    email:"hana@redux.com",
},
],
reducers:{
    setContact :(state,action)=>{
return action.payload
    }
}
        
  
   
})

export const { setContact} =contactSlice.actions
export default contactSlice.reducer 

      
 





