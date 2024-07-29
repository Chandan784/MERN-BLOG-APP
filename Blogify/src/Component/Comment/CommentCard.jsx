import React from "react";

function CommentCard({ data }) {
  return (
    <div className=" w-full lg:w-3/4 flex mt-6 gap-4  ">
      <div className="leftLogo    ">
        <img
          className=" h-10   rounded-full "
          src="https://th.bing.com/th/id/OIP.f3TNr7NBbIf89gXmb0wS_QAAAA?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>
      <div className="right ">
        <div className=" flex gap-2 items-center ">
          <h1 className=" text-lg font-medium ">{data.user.username}</h1>
          <p>{data.createdAt}</p>
        </div>
        <p className=" text-normal ">{data.text}</p>
        <div>
          <h2 className=" font-medium hover:text-cyan-800">Reply</h2>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
