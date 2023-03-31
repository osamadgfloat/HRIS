import React from "react";
import Grid from "@mui/material/Grid";
import LeaveTable from "../components/LeaveTable";

const LeaveScreen = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        marginLeft: "256px",
        padding: "32px",
        backgroundColor: "#eaeff1",
        minHeight: "calc(100vh - 67px)",
        position: "relative",
      }}
    >
      <LeaveTable />
    </Grid>
  );
};

export default LeaveScreen;
