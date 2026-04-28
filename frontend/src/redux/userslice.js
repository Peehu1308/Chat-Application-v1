import {createSlice} from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:{
        authuser:null,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.setAuthUser=action.payload;
        }
    }
});

export const {setAuthUser}=userSlice.actions;
export default userSlice.reducer;