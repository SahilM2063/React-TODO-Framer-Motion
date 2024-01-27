/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef();

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit ducimus voluptate consequatur officiis.",
      fileSize: "2mb",
      close: true,
      tag: {
        isOpen: true,
        tagDetail: "Downloading...",
        color: "green",
      },
    },
    {
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      fileSize: "3mb",
      close: false,
      tag: {
        isOpen: false,
        tagDetail: "Paused",
        color: "blue",
      },
    },
    {
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      fileSize: "1.5mb",
      close: true,
      tag: {
        isOpen: true,
        tagDetail: "Processing...",
        color: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-screen flex gap-6 flex-wrap p-6"
    >
      {data.map((item, index) => {
        return <Card key={index} data={item} reference={ref} />;
      })}
    </div>
  );
};

export default Foreground;
