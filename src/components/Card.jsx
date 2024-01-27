/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  const { desc, fileSize, close, tag } = data;
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.05}}
      dragElastic={0.2}
      className="relative w-60 h-72 rounded-[28px] bg-zinc-900/90 px-5 py-8 text-white overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="leading-tight mt-4 font-medium tracking-wide text-[14px]">
        {desc}
      </p>

      <div className="absolute w-full bottom-0 left-0">
        <div className="flex items-center justify-between px-5 w-full mb-4">
          <h5 className="text-sm">{fileSize}</h5>
          <span className="w-6 h-6 rounded-full bg-zinc-600/50 flex justify-center items-center cursor-pointer">
            {close ? <IoClose size={12} /> : <LuDownload size={12} />}
          </span>
        </div>
        {tag.isOpen && (
          <div
            className={`w-full flex justify-center items-center h-12 text-sm ${
              tag.color === "blue" ? "bg-blue-600/90" : "bg-green-600/90"
            }`}
          >
            {tag.tagDetail}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
