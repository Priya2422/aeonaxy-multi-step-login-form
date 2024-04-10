import { useEffect } from "react";
import ImageUpload from "./ImageUpload";
import Button from "../utils/Button";

function CreateProfile({ nextStep, values, prevStep, handleFormData }) {
  const handleNextClick = () => {
    if (values.image && values.address) {
      nextStep();
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="font-cursive text-pink-500 font-extralight text-4xl m-16 mb-8 mt-0 pt-16 semi-mob:m-auto semi-mob:w-full semi-mob:text-center semi-mob:pt-8">
        dribble
      </div>
      <div className="pl-10 m-auto mt-5 desk-rev:w-[90%] desk-rev:pl-0">
        <div className="flex flex-col gap-5 semi-mob:text-center">
          <div className="text-4xl font-bold ">
            Welcome! Let's create your profile
          </div>
          <div className="text-gray-500 font-medium">
            Let others get to know you better! You can do these later
          </div>
        </div>
        <div className="semi-mob:items-center semi-mob:justify-center flex ">
          <ImageUpload onUpload={handleFormData} image={values.image} />
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold ">Add your location</h2>
            <input
              type="text"
              placeholder="Enter a location"
              className="border-b border-gray-300 p-2 w-full mt-3 focus:outline-none focus:border-pink-500"
              onChange={handleFormData("address")}
              value={values.address}
            />
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 w-1/4 semi-mob:w-2/4 mob:w-full semi-mob:m-auto semi-mob:mt-8 pb-8">
            {values.image && values.address ? (
              <>
                <Button className="text-sm w-full" onClick={handleNextClick}>
                  Next
                </Button>
                <p className="text-gray-400 text-sm font-medium mb-5">
                  or Press{" "}
                  <Button
                    className=" bg-white p-0"
                    style={{
                      fontWeight: "700",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      color: "#a4a5af",
                    }}
                    onClick={prevStep}
                  >
                    Return
                  </Button>
                </p>
              </>
            ) : (
              <Button className="text-sm w-full opacity-50 cursor-not-allowed">
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
