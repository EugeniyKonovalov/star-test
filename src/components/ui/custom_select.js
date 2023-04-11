import React, { useEffect, useRef } from "react";
import Arrow from "components/svg/arrow-down.svg";
import classes from "styles/ui/select.module.css";

const CustomSelect = ({
  data,
  selected,
  onClick,
  isShow,
  setIsShow,
  placeholder,
}) => {
  const selectRef = useRef(null);

  const selectHandler = (item) => {
    onClick && onClick(item);
    setIsShow(false);
  };

  const outHandler = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", outHandler, true);
  }, []);

  return (
    <div className={classes.main_select} ref={selectRef}>
      <div className={classes.selected} onClick={() => setIsShow(!isShow)}>
        {!selected ? (
          <p className={classes.placeholder}>{placeholder}</p>
        ) : (
          <p className={classes.selected_item}>{selected}</p>
        )}
        <div
          className={!isShow ? classes.arrow : `${classes.arrow} ${classes.up}`}
        >
          <Arrow />
        </div>
      </div>
      {isShow && (
        <div className={classes.main_list}>
          <div className={classes.list}>
            {data?.map((item) => (
              <p
                className={classes.list_item}
                key={item}
                onClick={() => selectHandler(item)}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
