import CustomInput from "components/ui/custom_input";
import { useActions } from "hooks/useActions";
import useError from "hooks/useError";
import useInput from "hooks/useInput";
import React, { useEffect } from "react";
import { getUserData } from "store/app.selectors";
import classes from "styles/profile/steps.module.css";

const Location = () => {
  const { setStepUserFormData } = useActions();
  const userData = getUserData();
  const error = useError("location");

  const {
    data: locationData,
    setData: setLocationData,
    changeHandler: locationChangeHandler,
    isTouched: locationIsTouched,
    blurHandler: locationBlurhandler,
  } = useInput();

  useEffect(() => {
    setStepUserFormData({ location: locationData?.location });
  }, [locationData?.location]);

  useEffect(() => {
    setLocationData({ location: userData?.location });
  }, [userData?.location]);

  return (
    <div className={classes.step_main}>
      <div className={classes.step}>
        <p className={classes.label}>I am from</p>
        <div className={classes.location}>
          <CustomInput
            input={{
              type: "text",
              id: "location",
              placeholder: "Enter location",
              value: locationData?.location || "",
            }}
            onChange={locationChangeHandler}
            classNames={classes.center_input}
          />
        </div>
      </div>
      <p className={classes.explanation}>
        E.g.: New Roads or 70760 <br /> We don’t use postal addresses to contact
        members directly!
      </p>
      {error && !locationData?.location && (
        <div className={classes.error}>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Location;
