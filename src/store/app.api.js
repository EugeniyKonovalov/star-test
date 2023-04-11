import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { appActions } from "./app.slice";

export const appApi = createApi({
  reducerPath: "starApp",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    sendUserForm: builder.mutation({
      async queryFn(options, { dispatch }) {
        try {
          const { data } = await axios.post("api/send_form", options);

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
