import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  location: "",
  exp: "",
  workModes: [],
  techStacks: [],
  minBasePay: "",
  companyName: "",
};

const jobsFilterSlice = createSlice({
  name: "jobsFilter",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      console.log(state, action.payload);
      state.roles = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setExperience: (state, action) => {
      state.exp = action.payload;
    },
    setWorkModes: (state, action) => {
      state.workModes = action.payload;
    },
    setTechStacks: (state, action) => {
      state.techStacks = action.payload;
    },
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
  },
});

export const {
  setRoles,
  setWorkModes,
  setLocation,
  setTechStacks,
  setExperience,
  setCompanyName,
  setMinBasePay,
} = jobsFilterSlice.actions;

export const jobsFilterReducer = jobsFilterSlice.reducer;
