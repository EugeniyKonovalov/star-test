const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  step: 1,
  step_user_form: null,
  user_form: null,
  errors_data: [],
};

const appSlice = createSlice({
  name: "apps",
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.step === 5) {
        return;
      }
      state.step++;
    },
    prevStep: (state) => {
      if (state.step === 1) {
        return;
      }
      state.step--;
    },
    setStepUserFormData: (state, action) => {
      state.step_user_form = action.payload;
    },
    setUserFormData: (state, action) => {
      state.user_form = { ...state.user_form, ...action.payload };
    },
    setErrors: (state, action) => {
      state.errors_data = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice;
