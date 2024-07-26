import React from 'react'

function Profile() {
  return (
    <>
        <div className=' w-full  h-screen flex justify-center'>
            <div className=' flex flex-col items-center my-10 '>
                <div className=' size-56 
                 '>
                    <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
                    
                </div>
                <div className=' py-4'>
                    <h1 className=' text-xl font-bold'>User Name</h1>                
                    <h3>User ID</h3>
                </div> 
                <button className=" w-52 items-center justify-center bg-gray-600 rounded-2xl py-2 px-4 text-white font-semibold  ">
                    Edit Profile
                </button>   
            </div>
            <div className=' size-96 mx-10'>
                <img src="https://avatars.githubusercontent.com/u/129975307?v=4" alt="User Img" />
            </div>
        </div>
    </>
  )
}

export default Profile