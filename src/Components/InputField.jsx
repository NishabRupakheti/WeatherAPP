import React, { useState, useContext } from "react";
import { CiStar } from "react-icons/ci";
import styles from "./InputField.module.css";
import Button from "./Button";
import { InputContext } from "../Store/Contextprovider";

const InputField = () => {
  const { input, handleInput } = useContext(InputContext);

  return (
    <>
      <span className=" input-group flex-nowrap m-3 " style={{ width: "90%" }}>
        <span
          className={`input-group-text" id="addon-wrapping cool ${styles.cool}`}
        >
          <CiStar />
        </span>
        <input
          value={input}
          style={{borderRadius:"22px"}}
          onChange={handleInput}
          type="text"
          className={`form-control ${styles.inputfield}`}
          placeholder="Enter a city"
          aria-describedby="addon-wrapping"
        />
        <Button />
      </span>
    </>
  );
};

export default InputField;
