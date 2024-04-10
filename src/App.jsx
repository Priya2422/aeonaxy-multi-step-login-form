import React, { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import SelectionPage from "./components/SelectGoal/SelectionPage";
import EmailVerified from "./components/EmailVerified/EmailVerified";

function App() {
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    image: null,
    isTermsAgreed: false,
    address: "",
    workRole: {
      "hire-designers": false,
      "get-hired": false,
      "showcase-work": false,
  },
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = input => e => {
    const {value } = e.target;
    console.log(value);
    if(input==="image"){
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;
        setFormData(prevState => ({
          ...prevState,
          [input]: result
        }));
      };
      if (file) {
         reader.readAsDataURL(file);
      }
    }
    else{
      setFormData(prevState => ({
        ...prevState,
        [input]: value
      }));
    }
  }
  switch (step) {
   case 1:
      return <LoginPage nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>;
    case 2: 
      return  <CreateProfile nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
    case 3: 
      return <SelectionPage nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}  />;
    case 4: 
      return <EmailVerified values={formData} handleFormData={handleInputData}  />;
    default:
      return <LoginPage nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>;
  }
}

export default App;
