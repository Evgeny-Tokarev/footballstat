import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

function Navbar() {
  return (
    <ButtonGroup variant="contained">
      <Button href="/">Competitions</Button>

      <Button href="/teams">Teams</Button>

      {/* <Button href="/matches">Matches</Button>

      <Button href="/team">Team</Button> */}
    </ButtonGroup>
  );
}
export default Navbar;
