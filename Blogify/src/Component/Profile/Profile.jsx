import React from 'react'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <>
        <div className=' w-full  h-screen flex justify-center my-10 gap-60 '>
            <div className=' flex flex-col items-center  '>
                <div className=' size-56 '>
                    <img className=' flex rounded-full' src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
                    
                </div>
                <div className=' py-4'>
                    <h1 className=' text-xl font-bold'>User Name</h1>                
                    <h3>User ID</h3>
                </div> 
                
                <Link to="/edit-profile">
                    <button className=" w-52 items-center justify-center bg-slate-900 hover:bg-slate-500 hover:text-black rounded-2xl py-2 px-4 text-white font-semibold  ">
                    Edit Profile</button> 
                </Link>
            </div>
            <div className=' flex size-96 mx-10'>
                <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
            </div>
        </div>
    </>
  )
}

export default Profile