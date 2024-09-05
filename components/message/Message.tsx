import React from "react";

const Message = ({ randomMessage }: any) => {
  return (
    <>
      <div
        style={{ fontFamily: "Patrick Hand" }}
        className="mb-10 flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-900 py-2 text-[#FF1493] md:px-4"
      >
        <h1 className="text-md font-semibold md:text-3xl">{randomMessage}</h1>
        <p className="text-center text-lg font-semibold">
          Welcome To Our Little Universe 🌟💖
        </p>
      </div>
    </>
  );
};

export default Message;
