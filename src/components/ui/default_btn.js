import React from "react";
import btn_classes from "styles/ui/button.module.css";

const DefaultBtn = ({ children, title, onClick, classNames }) => {
  return (
    <button className={`${btn_classes.btn} ${classNames}`} onClick={onClick}>
      {children ? children : title}
    </button>
  );
};

export default DefaultBtn;
