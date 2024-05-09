import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import { Grid } from "@mui/material";
import JobCard from "../../components/jobCard/JobCard";

const SearchJobs = () => {
  return (
    <div>
      <FilterSection />
      <Grid container p={3} spacing={4}>
      </Grid>
    </div>
  );
};

export default SearchJobs;
