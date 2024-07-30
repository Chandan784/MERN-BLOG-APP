import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCreate } from "react-icons/io";
import MyBlog from '../Blogs/MyBlog';


function Profile() {
    let [userData,setUserData]=useState({})
    let user= JSON.parse(localStorage.getItem('userId'))
    useEffect(()=>{
        async function getUserData(){
            let response = await fetch(`http://localhost:8080/api/v1/users/${user}`)
            let data = await response.json()
            console.log(data, 'userdata');
            setUserData(data.user)
        }
        getUserData()
    })
    
    // function handelProfile(){

    // }

return (
    <>
        <div className=' w-full  h-auto flex justify-center my-10 gap-60 '>
            <div className='  flex flex-col items-center text-center '>
                <div className=' size-40 '>
                    <img className=' flex rounded-full' src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
                    
                </div>
                <div className=' py-3'>
                    <h1 className=' text-xl font-bold my-2'>{userData.username}</h1>                
                    <h3>{userData.email}</h3>
                </div> 
                <div className=' follow flex gap-4 my-2'>
                    <div className=' flex flex-col justify-center items-center font-bold'>
                        <p className=' text-2xl'>20</p>
                        <h1>Posts</h1>
                    </div>
                    <div className=' flex flex-col justify-center items-center font-bold'>
                        <p className=' text-2xl'>20</p>
                        <h1>Followers</h1>
                    </div>
                    <div className=' flex flex-col justify-center items-center font-bold'>
                        <p className=' text-2xl'>20</p>
                        <h1>Following</h1>
                    </div>
                </div>
                <Link to="/edit-profile">
                    <button className=" w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 my-4 text-white font-semibold  ">
                    Edit Profile</button> 
                </Link>
                <Link to="/edit-profile">
                    
                    <button  className=" flex gap-4 w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 text-white font-semibold  ">
                    <IoIosCreate className='text-2xl'/> Create Post</button> 
                </Link>
                <div className=''>
                    <h1 className=' text-xl font-bold my-3 border-4 border-b-slate-800'>My Blogs</h1>
                    <MyBlog/>
                </div>
            </div>
            {/* <div className=' flex size-96 mx-10'>
                <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
            </div> */}
            
        </div>
    </>
)
}

export default Profile