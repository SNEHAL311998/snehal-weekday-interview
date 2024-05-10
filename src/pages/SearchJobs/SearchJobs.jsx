import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import JobCard from "../../components/jobCard/JobCard";

const SearchJobs = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobsData, setJobsData] = useState({ jdList: [], totalCount: 0 });

  const filters = useSelector((state) => state.jobsFilter);

  const getJobs = async (offset = 0) => {
    return await axios
      .post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(({ data }) => ({ data }))
      .catch((error) => ({ error }));
  };

  const getAllJobs = async () => {
    setIsLoading(true);
    const { data, error } = await getJobs(count);
    if (data) {
      setJobsData({ ...data, jdList: [...jobsData.jdList, ...data.jdList] });
      setNoData(false);
      setIsLoading(false);
    } else if (error) {
      setNoData(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [count]);

  useEffect(() => {
    const {
      roles,
      minBasePay,
      location,
      companyName,
      workModes,
      exp,
      techStacks,
    } = filters;
    const filtered = jobsData.jdList.filter(
      (job) =>
        job.companyName?.toLowerCase()?.includes(companyName.toLowerCase()) &&
        job?.location?.toLowerCase()?.includes(location.toLowerCase()) &&
        (roles.length ? roles?.includes(job?.jobRole?.toLowerCase()) : true) &&
        (workModes.length
          ? workModes.includes(job?.location?.toLowerCase())
          : true) &&
        (exp
          ? parseInt(exp) >= job?.minExp && parseInt(exp) <= job?.maxExp
          : true) &&
        (minBasePay
          ? parseInt(minBasePay.replace(/\$/g, "")) >= job?.minJdSalary &&
            parseInt(minBasePay.replace(/\$/g, "")) <= job?.maxJdSalary
          : true)
    );
    setFilteredJobs(filtered);
  }, [filters, jobsData.jdList]);

  const handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    let timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (
        Math.floor(scrollHeight - (scrollTop + clientHeight)) <= 0 &&
        count * 10 < jobsData.totalCount
      ) {
        setCount(count + 1);
      }
    }, 200);
  };

  return (
    <div className="scroll-wrapper" onScroll={handleScroll}>
      <FilterSection />
      {!isLoading && noData ? (
        <Typography
          textAlign={"center"}
          mt={5}
          fontWeight={"500"}
          fontSize={"20px"}
        >
          No Jobs available at this moment
        </Typography>
      ) : (
        <>
          <Grid container p={3} spacing={4}>
            {filteredJobs?.map((job, i) => (
              <Grid key={`job-${i + 1}`} item xs={12} sm={6} md={4} lg={4}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
          {(!count || count * 10 < jobsData.totalCount) && (
            <Grid
              container
              justifyContent={"center"}
              alignItems={"flex-end"}
              height={"50px"}
              mb={2}
            >
              {isLoading && <CircularProgress />}
            </Grid>
          )}
        </>
      )}
    </div>
  );
};

export default SearchJobs;
