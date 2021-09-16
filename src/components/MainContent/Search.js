import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
    marginBottom: "20px",
  },
}));

function Search(props) {
  const classes = useStyles();
  const [competition, setCompetition] = useState("");
  function handleChange(e) {
    setCompetition(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCompetition("");

    props.findRow(
      props.names.findIndex((name) => {
        return name.includes(competition);
      })
    );
  }
  return (
    <Box
      component="form"
      className={classes.root}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder="Search competition"
        onChange={handleChange}
        variant="filled"
        value={competition}
      />
      <Button type="submit" variant="contained" size="large">
        <img src="../../search.svg" alt="" />
      </Button>
    </Box>
  );
}
export default Search;
