import React from "react";
import LoginForm from "./LoginForm";

import loginImage from "../../assets/login.png";

function LoginPage({ nextStep, values, handleFormData  }) {
  return (
    <div className="flex w-full">
      <div className="w-5/12 flex flex-col items-center justify-around h-screen bg-[#F5D487] tab-rev:hidden">
        <h1 className="font-cursive text-3xl text-[#835F13] font-[100] w-[70%]">dribble</h1>
        <h2 className="text-3xl font-bold text-[#835F13] w-[70%]">
          Discover the world's top Designers & Creatives.
        </h2>
        <img src={loginImage} alt="login" className="w-full" />
      </div>
      <div className="ml-5 w-9/12 tab-rev:m-auto tab-rev:w-full bg-white">
        <LoginForm nextStep={nextStep} handleFormData={handleFormData} values={values} />
      </div>
    </div>
  );
}

export default LoginPage;
