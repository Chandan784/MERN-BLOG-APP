import { configureStore } from "@reduxjs/toolkit";
// import userInfoReducer from '../features/Login/userInfoSlice';
// import courseInfoReducer from "../features/CourseDescription/courseDescriptionSlice";
import blogReducer from "./Slice/blogSlice";
const store = configureStore({
  reducer: {
    blog: blogReducer,
    // userInfo: userInfoReducer,
    // courseInfo: courseInfoReducer
    
  },
});

export default store;
