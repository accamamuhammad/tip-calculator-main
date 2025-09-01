"use client";
import React from "react";

interface TipsProps {
  amount: number;
  onSelect: (value: number) => void;
}

const Tips: React.FC<TipsProps> = ({ amount, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(amount)}
      className="w-full h-12 rounded-md text-white text-lg font-bold cursor-pointer bg-[#00494d] hover:bg-[#26c0ab] flex items-center justify-center"
    >
      {amount}%
    </button>
  );
};

export default Tips;
