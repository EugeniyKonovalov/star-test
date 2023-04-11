import React from "react";
import classes from "styles/ui/input.module.css";

const CustomInput = ({ onChange, input, classNames }) => {
  return (
    <div className={`${classes.control} ${classNames}`}>
      <input onChange={onChange} {...input} />
    </div>
  );
};

export default CustomInput;
