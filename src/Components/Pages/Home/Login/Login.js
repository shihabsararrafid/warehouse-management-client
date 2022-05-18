import {
  faEnvelope,
  faLock,
  faMailBulk,
  faMailReply,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import google from "./../../../../Images/google.png";
import github from "./../../../../Images/github.png";
import facebook from "./../../../../Images/facebook.png";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

import right from "./../../../../Images/right.jpg";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Login = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [wrongmessage, setWrongmessage] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [password, setPassword] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleSignIn = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
    console.log(user);
    if (user) {
      setTimeout(() => {
        const msg = document.getElementById("success");
        msg.style.display = "flex";
      }, 100);

      setTimeout(() => {
        const msg = document.getElementById("success");
        msg.style.display = "none";
      }, 5000);
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 6000);
    }
    if (error) {
      const newmsg = error.message;
      const wrmsg = newmsg.split("/")[1];

      setWrongmessage(wrmsg.slice(0, -2));
      // setTimeout(() => {
      //     const msg = document.getElementById('wrong');
      //     msg?.style.display = 'flex';

      // }, 100)

      // setTimeout(() => {
      //     const msg = document.getElementById('wrong');
      //     msg?.style.display = 'none';

      // }, 9000)
      console.log(wrongmessage);
    }
  };

  const emailLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setTimeout(() => {
            const msg = document.getElementById("success");
            msg.style.display = "flex";
          }, 100);

          setTimeout(() => {
            const msg = document.getElementById("success");
            msg.style.display = "none";
          }, 9000);
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 10000);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const message = errorMessage.split("/")[1];

        setWrongmessage(message.slice(0, -2));
        if (message) {
          setTimeout(() => {
            const msg = document.getElementById("wrong");
            msg.style.display = "flex";
          }, 100);

          setTimeout(() => {
            const msg = document.getElementById("wrong");
            msg.style.display = "none";
          }, 9000);
        }
      });
  };

  return (
    <div className="mt-10">
      <div
        id="success"
        className="w-[200px] hidden  h-[35px] lg:top-[86px] top-[95px] left-1/2 lg:left-[500px]
             absolute items-center font-semibold form-container bg-white justify-evenly  border-[2px] border-[#116F6A] rounded-lg "
      >
        <img className="w-[30px]" src={right} alt="" />{" "}
        <span>Log In Succesful</span>
      </div>
      <div
        id="wrong"
        className="w-[200px] hidden  h-[35px] lg:top-[86px] top-[95px] left-1/2 lg:left-[500px]
             absolute items-center font-semibold form-container bg-red-600 justify-evenly  rounded-lg "
      >
        <span className="uppercase text-white">{wrongmessage}</span>
      </div>
      <form className="w-[100%] md:w-[500px] login border-2 mb-10 mx-auto rounded-lg h-auto lg:h-[900px]">
        <div>
          <h1 className="font-bold text-center ">
            To Continue, log in to{" "}
            <span className="text-[#116F6A]">ELECTRA WAREHOUSE</span>{" "}
          </h1>
          <button
            onClick={googleSignIn}
            className="text-center hover:text-[#116F6A] hover:border-[#116F6A] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full"
          >
            <img className="w-[30px]" src={google} alt="" />{" "}
            <span>CONTINUE WITH TO GOOGLE</span>
          </button>
          <button className="text-center flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-[#3764B9] text-white rounded-full">
            <img className="w-[30px]" src={facebook} alt="" />
            <span>CONTINUE WITH TO FACEBOOK</span>
          </button>
          <button className="text-center hover:text-[#116F6A] hover:border-[#116F6A] flex items-center justify-evenly  w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black bg-white text-black rounded-full">
            <img className="w-[30px]" src={github} alt="" />
            <span>CONTINUE WITH TO GITHUB</span>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <hr className="w-[40%] h-[2px] bg-[#116F6A]" />
          <span className="block mx-3 font-bold">OR</span>
          <hr className="w-[40%] h-[2px] bg-[#116F6A]" />
        </div>
        <h1 className="text-center text-[#116F6A] font-bold text-3xl my-6">
          LOG IN
        </h1>
        <label className="text-lg font-semibold mx-14 my-10" htmlFor="Email">
          Email
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
            type="email"
            name=""
            id=""
          />
        </div>
        <label className="text-lg font-semibold mx-14 my-10" htmlFor="Password">
          Password
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
            type="password"
            name=""
            id=""
          />
        </div>
        <div className="flex items-center justify-between">
          <h1
            onClick={(e) => {
              sendPasswordResetEmail(email);
            }}
            className="text-center cursor-pointer hover:text-red-500"
          >
            Forgot Password?
          </h1>
          <button
            onClick={emailLogIn}
            className="px-16 block mr-0 justify-end  w-[90%] lg:w-[60%]   my-6 text-xl py-4 border-2 border-[#116F6A] font-bold duration-500 bg-[#116F6A] text-white hover:text-[#116F6A] hover:border-[#116F6A] hover:bg-white rounded-full"
          >
            LOG IN
          </button>
        </div>

        <h1 className="text-center text-2xl font-bold text-[#116F6A]">
          Don't Have An Account ?
        </h1>
        <Link to="/register">
          {" "}
          <button className="text-center block   w-[90%] ] mx-auto  my-6 text-lg py-4 border-[1px] font-semibold border-black hover:text-[#116F6A] hover:border-[#116F6A] bg-white text-black rounded-full">
            SIGN UP TO ELECTRA WAREHOUSE
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
