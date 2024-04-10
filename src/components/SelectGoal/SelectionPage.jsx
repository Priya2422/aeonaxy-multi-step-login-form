import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import image3 from "../../assets/img3-removebg-preview.png";
import image1 from "../../assets/img1-removebg-preview.png";
import image2 from "../../assets/img2-removebg-preview.png";
import Button from "../utils/Button";
import Card from "../utils/Card";

function SelectionPage({ nextStep, values, prevStep, handleFormData }) {
  const data = [
    {
      id: "hire-designers",
      title: "Hire designers",
      content:
        "Looking to hire designers for your team or project? Find the right talent here. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: image1,
    },
    {
      id: "get-hired",
      title: "Get hired",
      content:
        "Looking to hire designers for your team or project? Find the right talent here. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: image2,
    },
    {
      id: "showcase-work",
      title: "Showcase work",
      content:
        "Looking to hire designers for your team or project? Find the right talent here. Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      image: image3,
    },
  ];

  // console.log(Object.values(values.workRole).every(item => !item) === 0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <div className="flex gap-8 m-16 mb-8 mt-0 pt-16 items-center semi-mob:flex-row-reverse semi-mob:justify-center">
        <div className="font-cursive text-pink-500 font-extralight text-4xl">
          dribbble
        </div>
        <div
          className="text-md font-bold rounded-lg flex items-center justify-center hover:cursor-pointer bg-gray-200 h-10 w-10 text-gray-500"
          onClick={prevStep}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
      </div>
      <div className="max-w-screen-md m-auto mt-5 semi-mob:px-2">
        <div className="flex flex-col gap-7 text-center">
          <h1 className="text-3xl font-bold">What brings you to Dribbble?</h1>
          <p className="text-sm text-gray-500 font-medium">
            Select the option that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-28 semi-lg-mob:mt-16">
          <div className="flex gap-8 semi-lg-mob:flex-col semi-lg-mob:items-center semi-lg-mob:gap-16 m-auto">
            {data.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                content={item.content}
                image={item.image}
                handleFormData={handleFormData}
                values={values}
                className="w-1/3 semi-lg-mob:w-[255px]  hover:cursor-pointer"
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 pb-8">
            {!Object.values(values.workRole).every((item) => !item) ? (
              <>
                <p className="text-sm  font-semibold">
                  Once selected you can't change
                </p>
                <Button className="text-sm w-1/3" onClick={nextStep}>
                  Finish
                </Button>
                <p className="text-gray-400 text-xs font-semibold mb-5">
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
              <Button className="text-sm w-1/3 opacity-50 cursor-not-allowed mb-5">
                Finish
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;
