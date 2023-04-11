import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { appActions } from "./app.slice";

axios.defaults.baseURL = "http://www.mocky.io/v2/";

export const appApi = createApi({
  reducerPath: "starApp",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    sendUserForm: builder.mutation({
      async queryFn(options, { dispatch }) {
        try {
          const { data } = await axios.post(
            "5dfcef48310000ee0ed2c281",
            options
          );

          if (data?.status === "error")
            dispatch(appActions.setErrors(data?.errors));

          return { data };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useSendUserFormMutation } = appApi;
