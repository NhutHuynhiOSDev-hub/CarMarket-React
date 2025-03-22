import React from "react";
import { Textarea } from "@/components/ui/textarea";

function TextArea({ item, handleInputChange }) {
  return (
    <div>
      <Textarea
        name={item?.name}
        required={item?.required}
        className={
          "w-full h-[40px] text-white bg-black border-gray-400 border-1 outline-none focus:bg-gray-900 rounded-md px-4"
        }
        onChange={(e) => handleInputChange(item.name, e.target.value)}
      />
    </div>
  );
}

export default TextArea;
