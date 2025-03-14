import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DropdownField({ item, handleInputChange }) {
  return (
    <div>
      <Select
        required={item?.required}
        onValueChange={(value) => handleInputChange(item.name, value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={item?.label} />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-none">
          {item?.options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default DropdownField;
