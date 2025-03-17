import { firebaseStorage } from "@/services/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const UploadImages = ({ triggerUploadFeatureImage }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onFilesSelected = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFiles((prev) => [...prev, file]);
    }
  };

  useEffect(() => {
    if (triggerUploadFeatureImage) {
      uploadImagesToFireStore();
    }
  }, [triggerUploadFeatureImage]);

  const onImageRemove = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImagesToFireStore = () => {
    selectedFiles.forEach((file) => {
      const fileName = Date.now() + file.name + ".jpeg";
      const storageRef = ref(firebaseStorage, "car-market/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      try {
        uploadBytes(storageRef, file, metaData).then((response) => {
          console.log("Response: ", response);
          getDownloadURL(storageRef).then((url) => {
            console.log("URL: ", url);
          });
        });
      } catch (error) {
        console.error("UPLOAD IMAGE ERROR: ", error);
      }
    });
  };

  return (
    <div>
      <h2 className="font-medium text-3xl mb-4">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFiles?.map((item, index) => (
          <div key={index}>
            <IoCloseCircle
              className="absolute font-medium text-lg m-2 text-white"
              onClick={() => {
                onImageRemove(index);
              }}
            />
            <img
              src={URL.createObjectURL(item)}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="uploadImages">
          <div className="w-full h-[130px] rounded-xl border-[#343131] bg-black flex items-center justify-center cursor-pointer hover:shadow">
            <h2 className="text-lg font-bold text-center">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="uploadImages"
          className="opacity-0"
          onChange={onFilesSelected}
        />
      </div>
    </div>
  );
};

export default UploadImages;
