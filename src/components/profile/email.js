import CustomInput from "components/ui/custom_input";
import { useActions } from "hooks/useActions";
import useError from "hooks/useError";
import useInput from "hooks/useInput";
import React, { useEffect } from "react";
import { getUserData } from "store/app.selectors";
import classes from "styles/profile/steps.module.css";

const Email = () => {
  const { setStepUserFormData } = useActions();
  const userData = getUserData();
  const error = useError("email");

  const {
    data: emailData,
    setData: setEmailData,
    changeHandler: emailChangeHandler,
    isTouched: emailIsTouched,
    blurHandler: emailBlurhandler,
  } = useInput();

  const emailFormat = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const isEmail = emailFormat.test(emailData?.email);

  useEffect(() => {
    setStepUserFormData({ email: emailData?.email });
  }, [emailData?.email]);

  useEffect(() => {
    setEmailData({ email: userData?.email });
  }, [userData?.email]);

  return (
    <div className={classes.step}>
      <p className={classes.label}>Your email adress</p>
      <div className={classes.location}>
        <CustomInput
          input={{
            type: "email",
            id: "email",
            placeholder: "Enter your email",
            value: emailData?.email || "",
          }}
          onChange={emailChangeHandler}
          classNames={classes.center_input}
        />
      </div>
      {error && !isEmail && (
        <div className={classes.error}>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Email;
