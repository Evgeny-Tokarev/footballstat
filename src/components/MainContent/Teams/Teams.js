import React from "react";
import Table from "../../Table";
import { Typography } from "@material-ui/core";
function Teams() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      ></Typography>
      <Table path="teams" />
    </div>
  );
}
export default Teams;
