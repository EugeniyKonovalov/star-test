import React from "react";
import { Open_Sans } from "@next/font/google";
import classes from "styles/profile/profile.module.css";
import PrevNextBtn from "./prev_next_btn";
import {
  getCurrentStep,
  getStepUserData,
  getUserData,
} from "store/app.selectors";
import { useActions } from "hooks/useActions";
import WhoYouAre from "./who_are_you";
import Age from "./age";
import Location from "./location";
import Email from "./email";
import Pass from "./pass";
import { useSendUserFormMutation } from "store/app.api";

const Profile = () => {
  const { prevStep, nextStep, setUserFormData } = useActions();
  const [sendUserForm] = useSendUserFormMutation();
  const currentStep = getCurrentStep();
  const stepUserData = getStepUserData();
  const userData = getUserData();

  const prevHandler = () => {
    prevStep();
  };

  const nextHandler = () => {
    setUserFormData(stepUserData);
    nextStep();
    currentStep === 5 && sendUserForm(userData);
  };

  return (
    <section className={classes.main_form}>
      <div className={classes.main_text}>
        <p className={classes.heading}>STARCOMPANY DESIGNS, MANUFACTURES AND</p>
        <p className={classes.sub_heading}>
          Launches Advanced Rockets and Spacecrafts
        </p>
      </div>
      <PrevNextBtn prevHandler={prevHandler} nextHandler={nextHandler}>
        {currentStep === 1 && <WhoYouAre />}
        {currentStep === 2 && <Age />}
        {currentStep === 3 && <Location />}
        {currentStep === 4 && <Email />}
        {currentStep === 5 && <Pass />}
      </PrevNextBtn>
    </section>
  );
};

export default Profile;
