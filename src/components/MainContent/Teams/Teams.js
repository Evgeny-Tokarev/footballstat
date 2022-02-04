import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Image from "../Image";
import Search from "../Search";
import BackToTopButton from "../BackToTopButton";

function Teams() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    grey: {
      backgroundColor: "#e5e3e3",
    },
    block: {
      marginTop: "2rem",
    },
    myLink: {
      textDecoration: "none",
      color: "#666",
    },
    error: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#D15563 ",
    },
    message: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  });
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [found, setFound] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.football-data.org/v2/areas`, {
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
            `https://api.football-data.org/v2/teams/?areas=${europeAreas
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
            .then(
              (result) => {
                setItems(result.teams);
              },
              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            );
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
    if (found && found !== -1) {
      refs[items[found].id].current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [found, refs, items]);
  if (error) {
    if (error.message === "Failed to fetch") {
      return (
        <div className={classes.error}>
          Ошибка сервера, попробуйте повторить через минуту
        </div>
      );
    } else {
      return <div className={classes.error}>{error.message}</div>;
    }
  } else if (!isLoaded) {
    return <div className={classes.message}>Загрузка...</div>;
  } else {
    const names = items.map((item) => item.name);
    return (
      <div className={classes.block}>
        <BackToTopButton />
        <Typography
          variant="h4"
          component="h3"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          Teams
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
                <TableCell>Team</TableCell>
                <TableCell align="right">Crest</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow
                  key={item.id}
                  className={index === found ? classes.grey : ""}
                  ref={refs[item.id]}
                >
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/Team/${item.id}`}
                      params={{ id: item.id }}
                      className={classes.myLink}
                    >
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
