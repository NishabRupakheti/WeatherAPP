import React , {useState} from "react";
import { CiStar } from "react-icons/ci";
import styles from './InputField.module.css'
import Button from "./Button";

const InputField = () => {

    const [input , setInput] = useState('')

    const handleInput = (e)=>{
        setInput(e.target.value)
    }


  return (
    <>
        <span class=" input-group flex-nowrap m-3 " style={{width:"90%"}} >
      <span className= {`input-group-text" id="addon-wrapping cool ${styles.cool}`}>
      <CiStar />
      </span>
      <input
      value={input}
      onChange={handleInput}
        type="text"
        class="form-control"
        placeholder="Enter a city"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <Button />
    </span>
      </>
  );
};

export default InputField;
