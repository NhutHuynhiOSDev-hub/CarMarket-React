import React from "react";
import { Input } from "../ui/input";

function InputField({ item, handleInputChange }) {
  return (
    <div>
      <Input
        name={item?.name}
        type={item?.fieldType}
        required={item?.required}
        className={"bg-[#1a1a1a] border-none"}
        onChange={(e) => handleInputChange(item?.name, e.target.value)}
      />
    </div>
  );
}

export default InputField;
