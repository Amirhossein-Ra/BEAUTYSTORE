import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { userRequest } from "../RequestMethods";

export default function NewProduct() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploading, setUploading] = useState("uploading is 0%");
  const [selectedOptions, setSelectedOptions] = useState({
    concern: [],
    skintype: [],
    categories: [],
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const handleSelectedChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: [...prev[name], value],
    }));
    console.log(selectedOptions);
  };

  const handleRemoveOption = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].filter((options) => options !== value),
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();

    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    console.log(inputs);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedImage) return;
    setUploading("Uploading...");

    try {
      // 1. Get auth params from your backend
      const authRes = await axios.get("http://localhost:8080/imagekit-auth");
      const { token, expire, signature } = authRes.data;

      // 2. Build FormData for ImageKit upload API
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("fileName", selectedImage.name);
      formData.append("publicKey", "public_d5GOv0UvG4PcTE3hbAjfvV2R2E4=");
      formData.append("signature", signature);
      formData.append("expire", expire);
      formData.append("token", token);
      formData.append("folder", "/products"); 

      // 3. POST directly to ImageKit upload endpoint
      const uploadRes = await axios.post(
        "https://upload.imagekit.io/api/v1/files/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploading(`Uploading ${percent}%`);
          },
        },
      );


      const imageUrl = uploadRes.data.url; 
      setUploading("Upload complete ✓");

      console.log("Image URL:", uploadRes.data.url);

      await userRequest.post("/products", {
        img: imageUrl,
        ...inputs,
        ...selectedOptions,
      });
    } catch (err) {
      console.error(err);
      setUploading("Upload failed ✗");
    }
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-3xl font-semibold">New Product</h1>
      </div>
      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg ">
        <form className="flex flex-col md:flex-row rounded-lg ">
          {/* LEFT */}

          <div className="flex-1 space-y-5 ">
            <div className="m-0">
              <label htmlFor="" className="font-semibold mb-2">
                Image:
              </label>
              {!selectedImage ? (
                <div className="border-2 h-25 w-25 border-[#444] border-solid rounded-md">
                  <div className="flex items-center justify-center mt-10">
                    <label htmlFor="file" className="cursor-pointer">
                      <FaPlus className="text-[20px]" />
                    </label>
                  </div>
                </div>
              ) : (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="selectedImage"
                />
              )}
              <input
                type="file"
                id="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>

            <span className="text-green-500">{uploading}</span>

            <div className="">
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                name="title"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Product Name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Description
              </label>
              <textarea
                type="text"
                name="desc"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Product Description"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                id=""
                placeholder="$100"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                name="discountedPrice"
                id=""
                placeholder="$80"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="ml-5 flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                name="wholesalePrice"
                id=""
                placeholder="$70"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Minimum Quantity
              </label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                id=""
                placeholder="10"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id=""
                placeholder="Kylie"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Concern
              </label>
              <select
                name="concern"
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectedChange}
              >
                <option disabled defaultValue={true}>
                  Select Concern
                </option>
                <option>Dry Skin</option>
                <option>Pigmentation</option>
                <option>Oil Control</option>
                <option>Anti Acne</option>
                <option>Sunburn</option>
                <option>Skin Brightening</option>
                <option>Tan Removal</option>
                <option>Night Routine</option>
                <option>UV Protection</option>
                <option>Damaged Hair</option>
                <option>Frizzy Hair</option>
                <option>Stretch Marks</option>
                <option>Color Protection</option>
                <option>Dry Hair</option>
                <option>Soothing</option>
                <option>Dandruff</option>
                <option>Greying</option>
                <option>Hairfall</option>
                <option>Hair Color</option>
                <option>Well Being</option>
                <option>Acne</option>
                <option>Hair Growth</option>
              </select>
            </div>

            <div className="mt-2">
              {selectedOptions.concern.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("concern", option)}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                SkinType
              </label>
              <select
                name="skintype"
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectedChange}
              >
                <option disabled defaultValue={true}>
                  Select Skin Type
                </option>
                <option>All</option>
                <option>Oily</option>
                <option>Dry</option>
                <option>Sensitive</option>
                <option>Normal</option>
              </select>
            </div>
            <div className="mt-2">
              {selectedOptions.skintype.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("skintype", option)}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Category
              </label>
              <select
                name="categories"
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectedChange}
              >
                <option disabled defaultValue={true}>
                  Category
                </option>
                <option>Toners</option>
                <option>Serums</option>
                <option>Foundations</option>
                <option>Lotions</option>
              </select>
            </div>
            <div className="mt-2">
              {selectedOptions.categories.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <span>{option}</span>
                  <FaTrash
                    className="cursor-pointer text-red-500"
                    onClick={() => handleRemoveOption("categories", option)}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleUpload}
              className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
