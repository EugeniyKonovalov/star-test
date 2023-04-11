const { useSelector } = require("react-redux");

const getCurrentStep = () => useSelector((state) => state.app.step);
const getStepUserData = () => useSelector((state) => state.app.step_user_form);
const getUserData = () => useSelector((state) => state.app.user_form);
const getErrors = () => useSelector((state) => state.app.errors_data);

export { getCurrentStep, getUserData, getStepUserData, getErrors };
