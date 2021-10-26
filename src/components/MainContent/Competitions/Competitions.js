import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Search from "../Search";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Competitions(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    block: {
      marginTop: "2rem",
    },
    grey: {
      backgroundColor: "#e5e3e3",
    },
  });
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [found, setFound] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://api.football-data.org/v2/areas`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          let europeAreas = result.areas.filter(
            (area) => area.parentArea === "Europe"
          );
          fetch(
            `http://api.football-data.org/v2/competitions/?areas=${europeAreas
              .map((eArea) => eArea.id)
              .join(",")}`,
            {
              method: "GET",
              mode: "cors",
              headers: {
                "X-Auth-Token": process.env.REACT_APP_API_KEY,
              },
            }
          )
            .then((res) => res.json())
            .then((result) => {
              setItems(result.competitions);
            });
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const refs = items.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (found) {
      console.log("ref   " + refs[items[found].id].current);
      refs[items[found].id].current.scrollIntoView();
    }
  }, [found]);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    const names = items.map((item) => item.name);
    console.log(items);
    console.log(refs);
    console.log(found);
    return (
      <div className={classes.block}>
        <Typography
          variant="h4"
          component="h3"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          Competitions
        </Typography>
        <Search names={names} findRow={setFound} />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Competition</TableCell>
                <TableCell align="right">Start date</TableCell>
                <TableCell align="right">End date</TableCell>
                <TableCell align="right">Area</TableCell>
                <TableCell align="right">Match day</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  ref={refs[item.id]}
                  className={index === found ? classes.grey : ""}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/Matches/${item.id}`} params={{ id: item.id }}>
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    {item.currentSeason
                      ? item.currentSeason.startDate
                      : "------------------"}
                  </TableCell>
                  <TableCell align="right">
                    {item.currentSeason
                      ? item.currentSeason.endDate
                      : "------------------"}
                  </TableCell>
                  <TableCell align="right">{item.area.name}</TableCell>
                  <TableCell align="right">
                    {item.currentSeason
                      ? item.currentSeason.currentMatchday
                      : "------------------"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Competitions;
