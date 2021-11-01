import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Link } from "react-router-dom";
import Image from "../Image";

function Teams() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    block: {
      marginTop: "2rem",
    },
  });
  const classes = useStyles();
  const [error, setError] = useState(null);
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
            `http://api.football-data.org/v2/teams/?areas=${europeAreas
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
              setItems(result.teams);
            });
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={classes.block}>
        <Typography
          variant="h4"
          component="h3"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          Teams
        </Typography>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell align="right">Crest</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <Link to={`/Team/${item.id}`} params={{ id: item.id }}>
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Image
                      src={item.crestUrl}
                      srcOnError={"/images/question.svg"}
                      width="30px"
                      heght="30px"
                      alt="Team crest"
                    />
                  </TableCell>
                  <TableCell align="right">{item.area.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Teams;
