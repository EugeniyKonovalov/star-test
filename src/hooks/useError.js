import { getErrors } from "store/app.selectors";

const useError = (id) => {
  const errorsData = getErrors();
  const error = errorsData?.find((item) => item?.name === id);

  return error;
};
export default useError;
