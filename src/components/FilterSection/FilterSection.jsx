import { Grid } from "@mui/material";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  BASE_PAYS,
  EXPERIENCES,
  ROLES,
  TECH_STACKS,
  WORK_MODES,
} from "../../data/filterData";
import TextInput from "../TextInput/TextInput";
import {
  setRoles,
  setLocation,
  setExperience,
  setWorkModes,
  setTechStacks,
  setMinBasePay,
  setCompanyName,
} from "../../utils/redux/slices/jobsFilterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterSection = () => {
  const {
    exp,
    location,
    minBasePay,
    workModes,
    companyName,
    techStacks,
    roles,
  } = useSelector((state) => state.jobsFilter);
  const dispatch = useDispatch();
  return (
    <Grid container px={3} pt={1}>
      <Grid item xs={5} sm={3} md={4} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={roles}
          options={ROLES}
          onDropdownChange={(value) => dispatch(setRoles(value))}
          placeholder={"Roles"}
        />
      </Grid>
      <Grid item xs={7} sm={3} lg={2} paddingX={"3px"}>
        <TextInput
          value={location}
          onChange={(value) => dispatch(setLocation(value))}
          placeholder={"Location"}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={2} paddingX={"3px"}>
        <Dropdown
          value={exp}
          options={EXPERIENCES}
          onDropdownChange={(value) => dispatch(setExperience(value))}
          placeholder={"Experience"}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={3} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={workModes}
          options={WORK_MODES}
          onDropdownChange={(value) => dispatch(setWorkModes(value))}
          placeholder={"Remote"}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={4} lg={2} paddingX={"3px"}>
        <Dropdown
          isMultiple={true}
          value={techStacks}
          options={TECH_STACKS}
          onDropdownChange={(value) => dispatch(setTechStacks(value))}
          placeholder={"Tech Stack"}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} paddingX={"3px"}>
        <Dropdown
          value={minBasePay}
          options={BASE_PAYS}
          onDropdownChange={(value) => dispatch(setMinBasePay(value))}
          placeholder={"Min Base Pay Salary"}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={2} paddingX={"3px"}>
        <TextInput
          value={companyName}
          onChange={(value) => dispatch(setCompanyName(value))}
          placeholder={"Search Company Name"}
        />
      </Grid>
    </Grid>
  );
};

export default FilterSection;
