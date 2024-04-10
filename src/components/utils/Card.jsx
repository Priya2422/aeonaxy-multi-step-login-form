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
                     ${className} ${checked ? "border-pink-400" : ""} max-w-[400px]`}
      onClick={() => handleClick(id)}
      {...props}
    >
      <img
        src={image}
        alt="eye innovation"
        className={`h-30  m-auto ${checked ? "w-50%" : "w-[90%]"}`}
      />
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        {checked && (
          <p className="text-xs font-medium  text-gray-500 w-[70%] m-auto">
            {content}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center">
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
