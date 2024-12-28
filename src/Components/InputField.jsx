import React, { useState, useContext } from "react";
import { CiStar } from "react-icons/ci";
import styles from "./InputField.module.css";
import Button from "./Button";
import { InputContext } from "../Store/Contextprovider";

const InputField = () => {
  const { input, handleInput } = useContext(InputContext);

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div className="input-group w-75">
        <span
          className={`input-group-text ${styles.iconContainer} bg-primary text-white`}
          id="addon-wrapping"
        >
          <CiStar />
        </span>
        <input
          value={input}
          onChange={handleInput}
          type="text"
          className={`form-control ${styles['inputfield']}`}
          placeholder="Enter a city"
          aria-describedby="addon-wrapping"
        />
        <Button />
      </div>
    </div>
  );
};

export default InputField;
