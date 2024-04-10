import React, { useState } from "react";
import Button from "../utils/Button";
import Input from "../utils/Input";

function LoginForm({  nextStep, values, handleFormData }) {
  const [error, setError] = useState({
    "email": {
      message: "Email is required",
      status: false
    },
    "username": {
      message: "Username is required",
      status: false
    },
    "name": {
      message: "Username is required",
      status: false
    },
    "password": {
      message: "Your password is less than 6",
      status: false
    },
    "isTermsAgreed": {
      message: "Your password is less than 6",
      status: false
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    let flag=false;
    let errors = {
      "email": {
        message: "Email is required",
        status: false
      },
      "username": {
        message: "Username is required",
        status: false
      },
      "name": {
        message: "Username is required",
        status: false
      },
      "password": {
        message: "Your password is less than 6",
        status: false
      },
      "isTermsAgreed": {
        message: "You should agree to the terms to proceed further",
        status: false
      },
    };
    
    if (values.username.length === 0) {
      flag=true;
      errors.username.status=true;
    }
    if (values.name.length === 0) {
      flag=true;
      errors.name.status=true;
    }
    if(values.username === "priya2415"){
      errors.username.status=true;
      flag=true;
      errors.username.message="Username is already taked"
    }
    if (values.password.length < 6) {
      flag=true;
      errors.password.status=true;
    }
    if(values.email.length===0){
      flag=true;
      errors.email.status=true;
    }
    if(!values.isTermsAgreed){
      flag=true;
      errors.isTermsAgreed.status=true;
    }
    setError(errors);
    if(!flag){
      nextStep();
    }
  };

  return (
    <div className="flex flex-col overflow-auto">
      <div className="flex justify-end items-center font-medium mb-10 mt-10 mr-20">
        Already a member? <Button className=" bg-white " style={{color: "#4e4297"}}> Sign In</Button>
      </div>
      <div className="max-w-[50%] big-rev:max-w-[80%] m-auto  ">
        <div className="text-2xl font-bold">Sign up to Dribble</div>
        <div className=" m-5 ml-0 mob:m-1">
            {error.email.status && <li
              className="text-red-600 text-sm font-medium duration-200"
            >
              {error.email.message}
            </li>}
            {error.name.status && <li
              className="text-red-600 text-sm font-medium duration-200"
            >
              {error.name.message}
            </li>}
            {error.password.status && <li
              className="text-red-600 text-sm font-medium duration-200"
            >
              {error.password.message}
            </li>}
            {error.username.status && <li
              className="text-red-600 text-sm font-medium duration-200"
            >
              {error.username.message}
            </li>}
            {error.isTermsAgreed.status && <li
              className="text-red-600 text-sm font-medium duration-200"
            >
              {error.isTermsAgreed.message}
            </li>}
        </div>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="flex gap-5 w-full semi-mob::flex-col">
            <Input 
                type="text" 
                placeholder="Name" 
                label="Name" 
                value={values.name}
                error={error.name.status}
                style={
                  {
                    backgroundColor: error.name.status?"#feeeee":"",
                    color: error.name.status?"#e1807f":""
                  }
                }
                onChange={handleFormData("name")} 
                onFocus={()=>setError((prev)=>{
                  const name={
                    message: "Name is required",
                    status: false,
                  }
                  return {
                    ...prev,
                    name: name
                  }
                })} 
            />
            <Input
              type="text"
              placeholder="Username"
              label="Username"
              value={values.username}
              error={error.username.status}
              onChange={handleFormData("username")}
              style={
                {
                  backgroundColor: error.username.status?"#feeeee":"",
                  color: error.username.status?"#e1807f":""
                }
              }
              onFocus={()=>setError((prev)=>{
                const username={
                  message: "Username is required",
                  status: false,
                }
                return {
                  ...prev,
                  username: username
                }
              })}
            />
          </div>
          <Input
            type="email" 
            placeholder="Email" 
            label="Email" 
            value={values.email}
            error={error.email.status}
            onChange={handleFormData("email")} 
            onFocus={()=>setError((prev)=>{
              const email={
                message: "Email is required",
                status: false,
              }
              return {
                ...prev,
                email: email
              }
            })}
            style={
              {
                backgroundColor: error.email.status?"#feeeee":"",
                color: error.email.status?"#e1807f":""
              }
            }
          />
          <Input
            type="password"
            placeholder="6+ characters"
            label="Password"
            value={values.password}
            error={error.password.status}
            onChange={handleFormData("password")}
            onFocus={()=>setError((prev)=>{
              const password={
                message: "Your password is less than 6",
                status: false,
              }
              return {
                ...prev,
                password: password
              }
            })}
            style={
              {
                backgroundColor: error.password.status?"#feeeee":"",
                color: error.password.status?"#e1807f":""
              }
            }
          />
          <div className="flex items-center justify-start gap-4 text-sm font-medium ">
            <Input
              type="checkbox"
              value={values.isTermsAgreed}
              onChange={handleFormData("isTermsAgreed")}
              style={{
                width: "auto",
                marginTop: "4px",
              }}
              className={"h-4 w-9"}
              error={error.isTermsAgreed.status}
              onFocus={()=>setError((prev)=>{
                const isTermsAgreed={
                  message: "You should agree to the terms to proceed further",
                  status: false,
                }
                return {
                  ...prev,
                  isTermsAgreed: isTermsAgreed
                }
              })}
              
            />
            
          </div>
          <div className="flex flex-col gap-5 items-start">
            <Button type="submit" className="w-2/5 mob:w-full">
              Create Account
            </Button>
            <p className="text-xs font-medium text-gray-400 w-2/3 p-2">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-violet-800">Privacy Policy</span> and{" "}
              <span className="text-violet-800">Terms of Service</span> apply.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
