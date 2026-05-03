import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userslice";
import messageReducer from "./messageSlice";
import socketReducer from "./socketslice";

const store=configureStore({
    reducer:{
        user:userReducer,
        message:messageReducer,
        socket:socketReducer,
        
    }
});
export default store;