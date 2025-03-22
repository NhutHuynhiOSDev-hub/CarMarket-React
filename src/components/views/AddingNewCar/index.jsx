import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";

import Header from "@/components/Header";
import TextArea from "../../Fields/TextArea";
import InputField from "../../Fields/InputField";
import Features from "../../../data/Features.json";
import UploadImages from "./components/UploadImages";
import DropdownField from "../../Fields/DropdownField";
import FormElements from "../../../data/FormElements.json";
import { Button } from "@/components/ui/button";

function AddNewCar() {
  const [formData, setFormData] = useState();
  const [triggerUploadFeatureImage, setTriggerUploadFeatureImage] = useState();
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = ({ e }) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-full bg-black">
      <Header />
      <div className="pb-20 pt-[140px] px-10 md:px-20">
        <h2 className="font-bold text-4xl">Add New Car</h2>
        <form className="p-10 border rounded-md mt-10">
          {/* Car details */}
          <div>
            <h2 className="font-medium text-xl my-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {FormElements.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium pb-2">
                    {item.label}
                    {item.required && <span className="text-red-500"> *</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextArea
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="bg-gray-400 my-8" />
          {/* Features list */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid gid-cols-2 md:grid-cols-3 gap-6">
              {Features.features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-start gap-2"
                >
                  <input
                    className="accent-teal-900 hover:accent-white w-4 h-4"
                    type="checkbox"
                  />
                  <h2>{item?.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Car image */}
          <Separator className="bg-gray-400 my-8" />
          <UploadImages triggerUploadFeatureImage={triggerUploadFeatureImage} />
          <div className="flex justify-start">
            <Button
              // type="submit"
              className={
                "font-medium h-[40px] w-full md:w-1/2 text-sm hover:bg-teal-900 transition-all duration-300 text-white bg-[#1a1a1a] my-10"
              }
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewCar;
