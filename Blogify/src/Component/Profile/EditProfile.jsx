import React, { useState, useEffect } from 'react';
import { EditIcon } from '../common/Icons';
import PrimaryButton from '../common/PrimaryButton';
import { useDispatch } from 'react-redux';
import { getUserById } from '../../Redux/api/profile';

const EditProfile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserData() {
      const userId = JSON.parse(localStorage.getItem("userId"));
      const actionResult = await dispatch(getUserById(userId));
      setUserData(actionResult.payload.user);
    }
    fetchUserData();
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='bg-[#047790] py-20 md:py-24 lg:py-28'>
      <div className="max-w-[620px] p-10 bg-white mx-auto rounded-lg shadow-md">
        <form action="">
          <div className="flex gap-6 items-center">
            <div className="relative ">
              <div className='h-24 w-24 rounded-full border border-white bg-[#E3E3E3] overflow-hidden relative'>
                {imagePreview ? (
                  <img src={imagePreview} alt="avatar" className='h-full w-full object-cover' />
                ) : (<img
                  className="border-4 border-white rounded-full"
                  src="https://i.imghippo.com/files/hsQ8q1725361317.webp"
                  alt="User Img"
                />)}
              </div>
              <div className="absolute z-30 bottom-1 -right-0">
                <label htmlFor="image" className='text-sm text-gray-600 cursor-pointer h-7 w-7 shadow shadow-black bg-white rounded-full flex items-center justify-center'>
                  <EditIcon />
                </label>
                <input type="file" id="image" name="avatar" accept="image/png, image/jpeg" hidden onChange={handleImageChange} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className='text-base md:text-xl font-bold leading-none'>{userData.username}</p>
              <p className='text-base md:text-xl font-bold leading-none'>{userData.email}</p>
            </div>
          </div>
          <div className="py-6 mt-8 border-y border-slate-400/50 flex items-center">
            <label htmlFor="name" className='max-w-[150px] w-full text-lg md:text-xl font-medium'>Name</label>
            <input type="text" id='name' className='w-full py-1.5 px-3 outline-none text-slate-600 text-base md:text-lg bg-white text-end' defaultValue={userData.username} />
          </div>
          <div className="py-6 border-slate-400/50 flex items-center">
            <label htmlFor="email" className='max-w-[150px] w-full text-lg md:text-xl font-medium'>Email</label>
            <input type="email" id='email' className='w-full py-1.5 px-3 outline-none text-slate-600 text-base md:text-lg bg-white text-end' defaultValue={userData.email} />
          </div>
          <div className="py-6 border-y border-slate-400/50 flex items-center">
            <label htmlFor="password" className='max-w-[150px] w-full text-lg md:text-xl font-medium'>Password</label>
            <input type="password" id='password' className='w-full py-1.5 px-3 outline-none text-slate-600 text-base md:text-lg bg-white text-end' placeholder='password' />
          </div>
          <div className="mt-7">
            <PrimaryButton type="submit" className={"!bg-[#047790] !text-white"}>Save Change</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
