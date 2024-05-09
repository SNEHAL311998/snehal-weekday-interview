import React from "react";
import styles from "./JobCard.module.css";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import logo from "../../assets/user.jpg";
const JobCard = ({ job }) => {
  return (
    <Box className={styles.jobCard}>
      <Grid container mb={2}>
        <div className={styles.postedTimeTag}>⏳ Posted 11 days ago</div>
      </Grid>
      <Grid container className={styles.cardHeader}>
        <Avatar
          alt={job.companyName}
          src={job.logoUrl}
          className={styles.logo}
          variant="square"
        >
          {job.companyName.slice(0, 1).toUpperCase()}
        </Avatar>
        <Grid className={styles.companyName}>
          <span onClick={() => window.open(job.jdLink, "_blank")}>
            {job.companyName}
          </span>
        </Grid>
        <Grid className={styles.jobTitle}>{job.jobRole}</Grid>
        <Grid className={styles.location}>{job.location}</Grid>
      </Grid>
      <Typography className={styles.estimatedSalary}>
        Estimated Salary: {job.minJdSalary ? `$${job.minJdSalary} -` : "upto"}{" "}
        {job.minJdSalary ? "" : "$"} {job.maxJdSalary} PA ✅
      </Typography>
      <Typography mt={1} fontWeight={"500"} fontSize={"15px"}>
        About Company:
      </Typography>
      <Typography fontWeight={"600"} fontSize={"13px"}>
        About us:
      </Typography>
      <Grid container className={styles.aboutCompany}>
        {job.jobDetailsFromCompany}
      </Grid>
      <Grid className={styles.viewJobLink}>
        <a href={job.jdLink}>View job</a>
      </Grid>
      <Grid className={styles.minExp} mb={1}>
        <Typography component={"h3"}>Minimum Experience</Typography>
        <Typography>
          {job.minExp ?? 0} year{job.minExp > 1 ? "s" : ""}
        </Typography>
      </Grid>
      <Grid mb={1}>
        <CustomButton>⚡ Easy Apply</CustomButton>
      </Grid>
      <CustomButton isRefer={true}>
        <div className={styles.referral}>
          <img src={logo} alt="User" />
          <img src={logo} alt="User" />
          <span>Unlock referral asks</span>
        </div>
      </CustomButton>
    </Box>
  );
};

export default JobCard;
