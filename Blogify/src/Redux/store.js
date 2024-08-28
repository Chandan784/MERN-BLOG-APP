import { configureStore } from "@reduxjs/toolkit";
// import userInfoReducer from '../features/Login/userInfoSlice';
// import courseInfoReducer from "../features/CourseDescription/courseDescriptionSlice";
import blogReducer from "./Slice/blogSlice";
import commentReducer from "./Slice/commentSlice" 
import profileReducer from "./Slice/profileSlice"
import authReducer from "./Slice/authSlice"


const store = configureStore({
  reducer: {
    blog: blogReducer,
    comment: commentReducer,
    profile: profileReducer,
    auth: authReducer,
    // userInfo: userInfoReducer,
    // courseInfo: courseInfoReducer
    
  },

});

export default store;
