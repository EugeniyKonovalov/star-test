import React, { useState } from "react";
import header_classes from "styles/layout/header.module.css";
import btn_classes from "styles/ui/button.module.css";
import Logo from "assets/logo.png";
import DefaultBtn from "components/ui/default_btn";
import SignInForm from "components/auth/sign_in_form";
import useInput from "hooks/useInput";
import { useSendUserFormMutation } from "store/app.api";
import useError from "hooks/useError";

const Header = () => {
  const [sendUserForm] = useSendUserFormMutation();
  const [showForm, setShowForm] = useState(false);
  const error = useError("email");

  const { data: login, changeHandler: loginChangeHandler } = useInput();

  const loginHandler = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    showForm && sendUserForm({ email: login?.email, password: login?.user_p });
  };

  return (
    <header className={header_classes.main_header}>
      <div className={header_classes.header}>
        <img className={header_classes.logo} src={Logo.src} alt={"logo"} />

        <div className={header_classes.sign_in}>
          {showForm && (
            <div className={header_classes.login_form}>
              <SignInForm
                login={login}
                changeHandler={loginChangeHandler}
                error={error}
              />
            </div>
          )}
          <DefaultBtn
            title={"Log in"}
            classNames={
              showForm ? btn_classes["default-btn"] : btn_classes["hide-login"]
            }
            onClick={loginHandler}
          />
        </div>
      </div>
      {showForm && (
        <div className={header_classes.login_mobile}>
          <SignInForm
            login={login}
            changeHandler={loginChangeHandler}
            error={error}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
