import { useState } from "react";

const UseSelect = () => {
  const [selected, setSelected] = useState("");
  const [isShowList, setIsShowList] = useState(false);

  const selectHandler = (item) => setSelected(item);

  return {
    selected,
    setSelected,
    selectHandler,
    isShowList,
    setIsShowList,
  };
};
export default UseSelect;
