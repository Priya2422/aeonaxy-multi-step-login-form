import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
  label,
  onFocus,
  error,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-row items-center gap-2">
        {error && type!=="checkbox" && <FiAlertTriangle color="#e1807f"/>}
        {label && <label className="text-lg font-bold">{label}</label>}
      </div>
      <div className={type==="checkbox"?"flex flex-row gap-2 items-start":""}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          checked={value}
          onChange={onChange}
          onFocus={onFocus}
          className={`bg-gray-200 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
          {...props}
        />
        {type==="checkbox" && <p className="text-gray-600 text-[1rem]">
          Creating an account means you're okay with our{" "}
          <span className="text-violet-800">
          Terms of Service, Privacy Policy
          </span>
          , and our default{" "}
          <span className="text-violet-800">Notification Settings</span>.
        </p>}
      </div>
    </div>
  );
}

export default Input;
