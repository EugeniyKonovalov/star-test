import CustomInput from "components/ui/custom_input";
import { useActions } from "hooks/useActions";
import useError from "hooks/useError";
import useInput from "hooks/useInput";
import React, { useEffect } from "react";
import { getUserData } from "store/app.selectors";
import classes from "styles/profile/steps.module.css";

const Pass = () => {
  const { setStepUserFormData, setUserFormData } = useActions();
  const userData = getUserData();
  const error = useError("password");

  const {
    data: passwordData,
    setData: setPasswordData,
    changeHandler: passwordChangeHandler,
    isTouched: passwordIsTouched,
    blurHandler: passwordBlurhandler,
  } = useInput();

  useEffect(() => {
    setStepUserFormData({ password: passwordData?.form_p });
    setUserFormData({ password: passwordData?.form_p });
  }, [passwordData?.form_p]);

  useEffect(() => {
    setPasswordData({ form_p: userData?.password });
  }, [userData?.password]);

  return (
    <div className={classes.step_main}>
      <div className={classes.step}>
        <p className={classes.label}>Create your password</p>
        <div className={classes.location}>
          <CustomInput
            input={{
              type: "password",
              id: "form_p",
              name: "form",
              placeholder: "•••••••••••••••",
              value: passwordData?.form_p || "",
            }}
            onChange={passwordChangeHandler}
            classNames={classes.center_input}
          />
        </div>
      </div>
      <p className={classes.explanation}>
        By clicking the button above you agree to our{" "}
        <a href="#">Terms of Use</a> <br /> and
        <a href="#"> Privacy Policy</a> including use of cookies and to receive
        newsletters,
        <br /> account updates and offers sent by StarCompany.
      </p>
      {error && !passwordData?.form_p && (
        <div className={classes.error}>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Pass;
