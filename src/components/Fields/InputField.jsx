import React from "react";

function InputField({ item, handleInputChange }) {
  return (
    <div>
      <input
        name={item?.name}
        type={item?.fieldType}
        required={item?.required}
        className={
          "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900 rounded-md px-4"
        }
        onChange={(e) => handleInputChange(item?.name, e.target.value)}
      />
    </div>
  );
}

export default InputField;
