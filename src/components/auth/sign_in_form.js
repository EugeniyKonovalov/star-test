import CustomInput from "components/ui/custom_input";
import React from "react";
import classes from "styles/auth/sign_in.module.css";

const SignInForm = ({ login, changeHandler, error }) => {
  return (
    <div className={classes.sign_in_form}>
      <div className={classes.email}>
        <CustomInput
          input={{
            type: "email",
            id: "email",
            placeholder: "Email",
            value: login?.email || "",
          }}
          onChange={changeHandler}
        />
        {error && (
          <div className={classes.error}>
            <p>{error?.message}</p>
          </div>
        )}
      </div>
      <div className={classes.password}>
        <CustomInput
          input={{
            type: "password",
            id: "user_p",
            name: "login",
            placeholder: "Password",
            value: login?.user_p || "",
          }}
          onChange={changeHandler}
        />
        <a href={"#"} className={classes.forgot}>
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
