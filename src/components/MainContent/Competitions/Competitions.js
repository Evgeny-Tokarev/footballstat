import React from "react";
import Table from "../../Table";
import { Typography } from "@material-ui/core";
function Competitions() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Competitions
      </Typography>
      <Table
        path="competitions"
        columns={[
          "Competition",
          "Season start",
          "Season end",
          "Area",
          "Match day",
        ]}
      />
    </div>
  );
}
export default Competitions;
