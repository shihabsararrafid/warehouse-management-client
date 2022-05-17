import {
  faContactBook,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import google from "./../../../Images/google.png";
import github from "./../../../Images/github.png";
import facebook from "./../../../Images/facebook.png";
import { Link, useNavigate } from "react-router-dom";

import wrong from "./../../../Images/wrong.png";
import right from "./../../../Images/right.jpg";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";
import auth from "../../../firebase.init";
const Register = () => {
  // const [
  //     createUserWithEmailAndPassword,
  //     user,

  // ] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const userWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (res) {
          // console.log(res.user);
          await updateProfile({ displayName: name });
          // console.log(res.user);
          setTimeout(() => {
            const msg = document.getElementById("success");
            msg.style.display = "flex";
          }, 100);

          setTimeout(() => {
            const msg = document.getElementById("success");
            msg.style.display = "none";
          }, 9000);
          setTimeout(() => {
            navigate("/login");
          }, 10000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setTimeout(() => {
        const match = document.getElementById("match");
        match.style.display = "flex";
      }, 100);

      setTimeout(() => {
        const match = document.getElementById("match");
        match.style.display = "none";
      }, 4000);
    } else if (password === confirmPass) {
      userWithEmail();
    }
  };
  return (
    <div className="mt-10">
      <div
        id="success"
        className="w-[200px] hidden h-[35px] top-[86px] left-1/2 lg:left-[500px]
             absolute items-center font-semibold form-container bg-white justify-evenly  border-[2px] border-[#FF9900] rounded-lg "
      >
        <img className="w-[30px]" src={right} alt="" />{" "}
        <span>Registration Succesful</span>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[100%] md:w-[500px] login border-2 mb-10 mx-auto rounded-lg h-auto md:h-[1200px]"
      >
        {/* Buttons for social login */}

        <div>
          <h1 className="font-bold text-center ">
            SIGN UP FOR FREE TO{" "}
            <span className="text-[#116F6A]">ELECTRA WAREHOUSE</span>{" "}
          </h1>
          <button className="text-center hover:text-[#116F6A] hover:border-[#116F6A] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full">
            <img className="w-[30px]" src={google} alt="" />{" "}
            <span>SIGN UP WITH GOOGLE</span>
          </button>
          <button className="text-center flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-[#3764B9] text-white rounded-full">
            <img className="w-[30px]" src={facebook} alt="" />
            <span>SIGN UP WITH FACEBOOK</span>
          </button>
          <button className="text-center hover:text-[#116F6A] hover:border-[#116F6A] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full">
            <img className="w-[30px]" src={github} alt="" />
            <span>SIGN UP WITH GITHUB</span>
          </button>
        </div>

        {/* horijontal line for separating the two section */}
        <div className="flex items-center justify-center">
          <hr className="w-[40%] h-[2px] bg-[#116F6A]" />
          <span className="block mx-3 font-bold">OR</span>
          <hr className="w-[40%] h-[2px] bg-[#116F6A]" />
        </div>
        <h1 className="text-center text-[#116F6A] font-bold text-3xl my-6">
          SIGN UP
        </h1>

        {/* Input field for eamil and password login */}
        <label className="text-sm font-bold mx-14 mt-10" htmlFor="Email">
          WHAT'S YOUR NAME?
        </label>
        <div className="flex my-5 items-center">
          <p className="h-[50px] flex items-center justify-center w-[10%] border-[1px]">
            <FontAwesomeIcon
              className="h-[30px]"
              icon={faContactBook}
            ></FontAwesomeIcon>
          </p>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-[90%] text-xl h-[50px] border-[1px]"
            placeholder="Enter a profile name"
            type="text"
            name="name"
            id=""
          />
        </div>
        <p className="text-gray-500 mb-10 ml-[30px]">
          This appears on your profile
        </p>
        <label className="text-sm font-bold mx-14 my-10" htmlFor="Email">
          WHAT'S YOUR EMAIL?
        </label>
        <div className="flex my-5 items-center">
          <p className="h-[50px] flex items-center justify-center w-[10%] border-[1px]">
            <FontAwesomeIcon
              className="h-[30px]"
              icon={faEnvelope}
            ></FontAwesomeIcon>
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-[90%] text-xl h-[50px] border-[1px]"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            id=""
          />
        </div>
        <label
          className="text-sm font-bold uppercase mx-14 my-10"
          htmlFor="Password"
        >
          CREATE a Password
        </label>
        <div className="flex my-5 items-center">
          <p className="h-[50px] flex items-center justify-center w-[10%] border-[1px]">
            <FontAwesomeIcon
              className="h-[30px] font-semibold"
              icon={faLock}
            ></FontAwesomeIcon>
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[90%] text-xl h-[50px] border-[1px]"
            placeholder="Create a Password"
            type="password"
            name="password"
            id=""
          />
        </div>
        <label
          className="text-sm font-bold uppercase mx-14 my-10"
          htmlFor="Confirm Password"
        >
          Confirm your Password
        </label>
        <div className="flex my-5 items-center">
          <p className="h-[50px] flex items-center justify-center w-[10%] border-[1px]">
            <FontAwesomeIcon
              className="h-[30px] font-semibold"
              icon={faLock}
            ></FontAwesomeIcon>
          </p>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-[90%] text-xl h-[50px] border-[1px]"
            placeholder="Confirm Your Password"
            type="password"
            name="confirm password"
            id=""
          />
        </div>
        <div id="match" className="mx-auto hidden  w-[75%]">
          <img className="w-[20px] h-[20px]" src={wrong} alt="" />
          <p className="mx-3 text-red-500">Password didn't match</p>
        </div>

        <div className="flex items-center justify-between">
          <h1
            onClick={() => sendEmailVerification()}
            className="text-center cursor-pointer hover:text-green-500"
          >
            Verify Email
          </h1>
          <button
            onClick={signUp}
            className="px-16 block mr-0 justify-end  w-[90%] lg:w-[60%]   my-6 text-xl py-4 border-2 border-[#116F6A] font-bold duration-500 bg-[#116F6A] text-white hover:text-[#116F6A] hover:border-[#116F6A] hover:bg-white rounded-full"
          >
            SIGN UP
          </button>
        </div>

        <h1 className="text-center text-2xl font-bold text-[#116F6A]">
          Already have an account?{" "}
        </h1>
        <Link to="/login">
          {" "}
          <button className="text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black hover:text-[#116F6A] hover:border-[#116F6A] bg-white text-black rounded-full">
            LOG IN TO ELECTRA WAREHOUSE
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
