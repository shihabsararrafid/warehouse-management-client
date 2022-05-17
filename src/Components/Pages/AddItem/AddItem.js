import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    const url = "http://localhost:5000/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        // toast("New Item added successfully");
        // alert("New Item added successfully");
      });
    navigate("/inventory");
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <h1 className="text-4xl text-green-600 font-bold uppercase">Add Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5 rounded-lg mx-auto h-[40px]  border-green-500"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Price"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("price", { required: true })}
        />
        {errors.price && <p className="text-red-600">This is required</p>}

        <input
          placeholder="Quantity"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Supplier"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("supplier", { required: true })}
        />
        {errors.supplier && <p className="text-red-600">This is required</p>}
        <input
          placeholder="PhotoUrl"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("img", { required: true })}
        />
        {errors.img && <p className="text-red-600">This is required</p>}
        <input
          placeholder="Features"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("description.Features", {
            required: true,
          })}
        />
        {errors.description?.Features && (
          <p className="text-red-600">This is required</p>
        )}
        <input
          placeholder="Product Model"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("description.Model", { required: true })}
        />
        {errors.description?.Model && (
          <p className="text-red-600">This is required</p>
        )}
        <input
          placeholder="Brand"
          className="border-[1px] block lg:w-[30%] md:w-[60%] w-full my-5  mx-auto h-[40px] rounded-lg border-green-500"
          {...register("description.Brand", { required: true })}
        />
        {errors.description?.Brand && (
          <p className="text-red-600">This is required</p>
        )}

        <input
          className="font-semibold text-2xl  my-9 lg:left-1/3 left-1/4  mx-auto hover:bg-white hover:text-[#1aee0f] duration-500 hover:border-[#1aee0f] hover:border-[3px] outline-0   rounded-3xl uppercase flex justify-center items-center font-mono text-white w-[60%]  lg:w-[30%]   px-6 py-3 border-[2px] bg-[#1aee0f]"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
