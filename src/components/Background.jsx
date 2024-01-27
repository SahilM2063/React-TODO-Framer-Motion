/* eslint-disable no-unused-vars */
import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="absolute top-[3%] w-full py-10 flex justify-center text-lg text-zinc-400">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none font-semibold text-zinc-600">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
