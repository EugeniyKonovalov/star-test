import DefaultBtn from "components/ui/default_btn";
import React from "react";
import ShevronRight from "components/svg/shevron-right.svg";
import ShevronLeft from "components/svg/shevron-left.svg";
import CheckMark from "components/svg/check-mark.svg";
import classes from "styles/profile/prev_next_btn.module.css";
import btn_classes from "styles/ui/button.module.css";
import { getCurrentStep } from "store/app.selectors";

const PrevNextBtn = ({ children, prevHandler, nextHandler }) => {
  const currentStep = getCurrentStep();

  return (
    <div className={classes.main}>
      <div className={classes.mobile_steps}>{children}</div>
      <div className={classes.buttons}>
        <div className={classes.prev_btn} onClick={prevHandler}>
          <ShevronRight />
        </div>
        <div className={classes.steps}>{children}</div>
        <DefaultBtn
          classNames={
            currentStep === 5
              ? btn_classes.last_btn
              : btn_classes["default-btn"]
          }
          onClick={nextHandler}
        >
          <div
            className={
              currentStep !== 5
                ? `${classes.next_btn}`
                : `${classes.next_btn} ${classes.last_btn}`
            }
          >
            <p>{currentStep === 5 ? "Start now" : "Next step"}</p>
            {currentStep === 5 ? <CheckMark /> : <ShevronLeft />}
          </div>
        </DefaultBtn>
        <div className={classes.circles}>
          {Array.from(Array(5).keys()).map((item) => (
            <div
              key={item}
              className={
                item + 1 <= currentStep
                  ? `${classes.circle_item} ${classes.circle_fill}`
                  : `${classes.circle_item}`
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrevNextBtn;
