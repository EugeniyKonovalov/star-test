import CustomSelect from "components/ui/custom_select";
import { useActions } from "hooks/useActions";
import UseSelect from "hooks/useSelect";
import React, { useEffect } from "react";
import { getUserData } from "store/app.selectors";
import classes from "styles/profile/steps.module.css";

const profData = [
  "Engineer",
  "Business Development Executive",
  "Office Manager/PA",
  "Accountant",
  "VR Designer",
];

const WhoAreYou = () => {
  const { setStepUserFormData } = useActions();
  const userData = getUserData();
  const {
    selected: selectedProfession,
    setSelected: setSelectedProfession,
    selectHandler: selectedProfessionHandler,
    isShowList: professionIsShowList,
    setIsShowList: professionSetIsShowList,
  } = UseSelect();

  useEffect(() => {
    setStepUserFormData({ profession: selectedProfession });
  }, [selectedProfession]);

  useEffect(() => {
    setSelectedProfession(userData?.profession);
  }, [userData?.profession]);
  return (
    <div className={classes.step}>
      <p className={classes.label}>Who are you?</p>
      <CustomSelect
        data={profData}
        selected={selectedProfession}
        isShow={professionIsShowList}
        setIsShow={professionSetIsShowList}
        onClick={(item) => selectedProfessionHandler(item)}
        placeholder={"Select an activity"}
      />
    </div>
  );
};
export default WhoAreYou;
