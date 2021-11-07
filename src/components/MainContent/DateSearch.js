import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { parseISO } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "left",
    marginBottom: "20px",
  },
}));
const DateSearch = ({ matches, setMatches }) => {
  console.log(matches.length);
  const classes = useStyles();
  const [startDate, setStartDate] = useState(
    new Date(parseISO(matches[0].utcDate))
  );
  const [endDate, setEndDate] = useState(
    new Date(parseISO(matches[matches.length - 1].utcDate))
  );
  const validateDate = (date) => {
    console.log(
      date +
        "   " +
        new Date(parseISO(matches[0].utcDate)) +
        "   " +
        new Date(parseISO(matches[matches.length - 1].utcDate))
    );
    if (
      date >= new Date(parseISO(matches[0].utcDate)) &&
      date < new Date(parseISO(matches[matches.length - 1].utcDate)) &&
      date !== null
    ) {
      return true;
    } else return false;
  };
  const handleStartDateChange = (newValue) => {
    if (validateDate(newValue)) {
      console.log("Ok");
      setStartDate(newValue);
      setMatches(
        matches.filter((match) => {
          return (
            new Date(match.utcDate) >= new Date(newValue) &&
            new Date(match.utcDate) < new Date(endDate)
          );
        })
      );
    } else {
      console.log("No");
    }
  };
  const handleEndDateChange = (newValue) => {
    if (validateDate(newValue)) {
      console.log("Ok");
      setEndDate(newValue);
      setMatches(
        matches.filter((match) => {
          return (
            new Date(match.utcDate) >= new Date(startDate) &&
            new Date(match.utcDate) < new Date(newValue)
          );
        })
      );
    } else {
      console.log("No");
    }
  };
  return (
    <Box
      component="form"
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          label="Start date"
          value={startDate}
          onChange={handleStartDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DateTimePicker
          label="End date"
          value={endDate}
          onChange={handleEndDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};
export default DateSearch;
