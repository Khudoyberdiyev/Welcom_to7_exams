// @ts-nocheck
import React from "react";

const Counter = ({ setCount, count }) => {
  return (
    <div className="flex items-center p-1 rounded-md border border-1 min-w-[100px] justify-between">
      <button
        style={{
          opacity: count === 1 && "0.3",
          cursor: count === 1 && "no-drop",
        }}
        onClick={() => count > 1 && setCount(count - 1)}
        className="text-[20px] flex items-center justify-center w-[30px] rounded-full bg-[#46A358] hover:bg-[#46a359a2] text-white"
      >
        -
      </button>
      <h2 className="px-1">{count}</h2>
      <button
        onClick={() => count > 0 && setCount(count + 1)}
        className="text-[20px] flex items-center justify-center w-[30px] rounded-full bg-[#46A358] hover:bg-[#46a359a2] text-white"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
