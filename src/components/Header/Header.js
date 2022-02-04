import React from "react";
import Navbar from "./Navbar/Navbar";
import { Typography } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <Typography
        variant="h3"
        component="h1"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Football statistics
      </Typography>
      <Navbar />
    </div>
  );
}
export default Header;
