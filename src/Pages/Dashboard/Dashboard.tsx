import React, { FC } from "react";
import Chart from "@Components/Chart/Chart";
import { Grid } from "@mui/material";
import { Wrapper } from "@Components/Wrapper/Wrapper";
import { chartType } from "@Utils/Constants/ChartConfig";

const Dashboard: FC = () => {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Chart type={chartType?.line} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Chart type={chartType?.bar} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Chart type={chartType?.doughnut} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Chart type={chartType?.pie} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
