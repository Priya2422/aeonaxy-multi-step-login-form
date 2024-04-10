/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMagnifyingGlass,
  faEnvelope,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { BiSolidCameraPlus } from "react-icons/bi";
import Footer from "../Footer";
import { BsDribbble } from "react-icons/bs";

function EmailVerified({ values,handleFormData }) {
  const [optionsClicked, setOptionsClicked] = useState(false);

  const options = [
    "Inspiration",
    "Find Work",
    "Learn Design",
    "Go Pro",
    "Hire Designers",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOptionsClick = () => {
    setOptionsClicked(!optionsClicked);
  };

  return (
    <div className="h-full bg-white">
      <div className="flex justify-between p-5 items-center">
        <div className="flex gap-5 items-center">
          <p className=" font-cursive text-2xl">dribbble</p>
          <button
            className="hidden relative text-gray-500 font-medium desk-rev:flex desk-rev:gap-2 desk-rev:items-center"
            onClick={handleOptionsClick}
          >
            Options{" "}
            {!optionsClicked ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
            <div
              className={`${optionsClicked && "absolute top-6 z-50 bg-gray-100 border-2 rounded-lg w-40"}`}
            >
              {optionsClicked &&
                options.map((option, index) => (
                  <p
                    key={index}
                    className="text-gray-500 font-medium pt-2 border-b-[1px]"
                  >
                    {option}
                  </p>
                ))}
            </div>
          </button>

          <li className="text-gray-500 font-medium desk-rev:hidden list-none">
            <a href="#">Inspiration</a>
          </li>
          <li className="text-gray-500 font-medium desk-rev:hidden list-none">
            <a href="#">Find Work</a>
          </li>
          <li className="text-gray-500 font-medium desk-rev:hidden list-none">
            <a href="#">Learn Design</a>
          </li>
          <li className="text-gray-500 font-medium desk-rev:hidden list-none">
            <a href="#">Go Pro</a>
          </li>
          <li className="text-gray-500 font-medium desk-rev:hidden list-none">
            <a href="#"> Hire Designers</a>
          </li>
        </div>
        <div className="flex gap-5 items-center">
          <div className="bg-gray-200 p-2 flex gap-2 w-52 max-[500px]:w-full rounded-lg items-center desk-rev:hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
            <p className="text-gray-500 max-[400px]:hidden">Search</p>
          </div>
          <div className="tab-rev:hidden">
            <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
          </div>
          <div>
            {values.image ? (
              <div className=" w-[50px] h-[50px] max-[500px]:w-[30px] max-[500px]:h-[30px] rounded-full overflow-hidden">
                <img
                  src={values.image}
                  alt="Uploaded"
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden max-[500px]:w-[30px] max-[500px]:h-[30px] flex items-center justify-center border-dashed border-2 border-gray-300">
                <BiSolidCameraPlus className="text-xl text-gray-400" />
              </div>
            )}
          </div>
          <input
              type="file"
              className="hidden"
              id="uploadInput"
              onChange={handleFormData("image")}
            />
          <label htmlFor="uploadInput" className="cursor-pointer bg-[#EA4B8B] p-2 rounded-md font-medium text-white">Upload</label>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5 items-center mt-24 max-[500px]:mt-8 max-w-4xl max-[900px]:px-3 m-auto text-center">
          <h1 className="text-4xl font-semibold max-[500px]:text-3xl">
            Please verify your email
          </h1>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-9xl max-[500px]:text-7xl text-[#BBBBBB]"
          />
          <p className="text-gray-500 font-medium">
            Please very your email address. We've sent a confirmation email to:
          </p>
          <p className="text-lg font-bold">{values.email}</p>
          <p className="text-gray-500 font-medium">
            Click the confirmation link in the email to begin using Dribble
          </p>
          <p className="text-gray-500 font-medium">
            Didn't receive email? Check your spam folder, it mayy have been
            caught by a filter. If you still don't see you can{" "}
            <span className="text-pink-500 font-semibold cursor-pointer">
              resend the confirmation email
            </span>{" "}
          </p>
          <p className="mb-32">
            Wrong email address?{" "}
            <span className="text-pink-500 font-semibold cursor-pointer">
              change it.
            </span>
          </p>
        </div>
        <Footer/>
        <div className=" w-full text-center font-medium m-auto text-sm p-5 text-gray-500  ">
          <hr className=" text-gray-200 w-[90%] m-auto mb-7" />
        <div className="flex flex-row justify-between w-[90%] m-auto">
          <p>© 2024 Dribbble. All rights reserved.</p>
          <p className="flex flex-row gap-2"><span><b>20,501,853</b> shorts dribbbled </span><BsDribbble color="#EA4B8B"/></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerified;
