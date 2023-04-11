import CustomSelect from "components/ui/custom_select";
import { useActions } from "hooks/useActions";
import useError from "hooks/useError";
import UseSelect from "hooks/useSelect";
import React, { useEffect } from "react";
import { getUserData } from "store/app.selectors";
import classes from "styles/profile/steps.module.css";

const ageData = Array.from(Array(80).keys()).map((item) => item + 18);

const Age = () => {
  const { setStepUserFormData } = useActions();
  const userData = getUserData();
  const error = useError("age");

  const {
    selected: selectedAge,
    setSelected: setSelectedAge,
    selectHandler: selectedAgeHandler,
    isShowList: ageIsShowList,
    setIsShowList: ageSetIsShowList,
  } = UseSelect();

  useEffect(() => {
    setStepUserFormData({ age: selectedAge });
  }, [selectedAge]);

  useEffect(() => {
    setSelectedAge(userData?.age);
  }, [userData?.age]);

  return (
    <div className={classes.step}>
      <p className={classes.label}>What is your age?</p>
      <CustomSelect
        data={ageData}
        selected={selectedAge}
        isShow={ageIsShowList}
        setIsShow={ageSetIsShowList}
        onClick={(item) => selectedAgeHandler(item)}
        placeholder={"Select your age"}
      />
      {error && !selectedAge && (
        <div className={classes.error}>
          <p>{error?.message}</p>
        </div>
      )}
    </div>
  );
};

export default Age;
