import React from "react";
import Request from "../../Request";
import { Typography } from "@material-ui/core";
function Competitions() {
  return (
    <div>
      <Typography
        variant="h5"
        component="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Competitions
      </Typography>
      <Request />
    </div>
  );
}
export default Competitions;
