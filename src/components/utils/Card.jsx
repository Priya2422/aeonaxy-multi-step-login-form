import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Card({
  id,
  title,
  content,
  image,
  className,
  nextStep,
  handleFormData,
  values,
  ...props
}) {
  const [checked, setChecked] = useState(values.workRole[id]);

  const handleClick = (roleId) => {
    setChecked((prev) => !prev);
    console.log(roleId, values.workRole[roleId]);
    const e = {
      target: {
        value: {
          ...values.workRole,
          [roleId]: !values.workRole[roleId],
        },
      },
    };
    const eventHandler = handleFormData("workRole");
    eventHandler(e);
  };
  return (
    <div
      className={`flex flex-col hover:border-2 p-2 rounded-xl border-2 relative hover:border-pink-400 gap-3 text-center 
                     ${className} ${checked ? "border-pink-400" : ""}`}
      onClick={() => handleClick(id)}
      {...props}
    >
      <img
        src={image}
        alt="eye innovation"
        className="h-30 w-[90%] m-auto"
        style={{
          position: checked ? "absolute" : "",
          top: checked ? "-60px" : "",
        }}
      />
      <div
        style={{
          marginTop: checked ? "80px" : "0px",
          position: checked ? "relative" : "",
          top: checked ? "40%" : "",
        }}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        {checked && (
          <p className="text-xs font-medium  text-gray-500">{content}</p>
        )}
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          position: checked ? "relative" : "",
          top: checked ? "40%" : "",
        }}
      >
        {!checked ? (
          <div className="border-2 h-6 w-6 rounded-full"></div>
        ) : (
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#ea4b89", height: "1.5rem", width: "1.5rem" }}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
