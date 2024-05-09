import { configureStore } from "@reduxjs/toolkit";
import { jobsFilterReducer } from "./slices/jobsFilterSlice";

export default configureStore({
  reducer: { jobsFilter: jobsFilterReducer },
});
