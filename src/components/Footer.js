import React from "react";
import { Typography } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <Typography
        variant="h5"
        component="h4"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        This app is based on&nbsp;
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.football-data.org/"
        >
          https://www.football-data.org/
        </a>
      </Typography>
    </div>
  );
}
export default Footer;
