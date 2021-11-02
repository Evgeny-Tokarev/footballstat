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
import Image from "../Image";

function Competitions(props) {
  console.log("Начало компонента");
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
    centered: {
      verticalAlign: "middle",
      marginRight: "1rem",
    },
    myLink: {
      textDecoration: "none",
      color: "#666",
    },
  });
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [found, setFound] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("effect 1  []");
    fetch(`http://api.football-data.org/v2/areas`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => {
        console.log("api ответ 1 + res: " + res.status);
        setStatus(res.status);
        return res.json();
      })
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
            .then((res) => {
              console.log("api ответ 2 + res : " + res.status);
              setStatus(res.status);
              return res.json();
            })
            .then(
              (result) => {
                console.log();
                setItems(result.competitions);
              },
              (error) => {
                console.log("fetch 1 error : " + error);
                setIsLoaded(true);
                setError(error);
              }
            );
          setIsLoaded(true);
        },
        (error) => {
          console.log("fetch 2 error : " + error);

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
    console.log("эффект 2 found, refs, items");
    if (found && found !== -1) {
      refs[items[found].id].current.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [found, refs, items]);
  if (error) {
    console.log("error 1 : " + error);
    if (status === 429) return <div>Повторите позже</div>;
    return (
      <div>
        Ошибка: {error.message} {status}
      </div>
    );
  } else if (!isLoaded) {
    console.log("загрузка");
    return <div>Загрузка...</div>;
  } else {
    console.log("рендер");

    const names = items.map((item) => item.name);
    const now = new Date();
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
                <TableCell align="left">Country</TableCell>
                <TableCell align="left">State</TableCell>
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
                    <Link
                      to={`/Matches/${item.id}`}
                      params={{ id: item.id }}
                      className={classes.myLink}
                    >
                      {item.name}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Image
                      className={classes.centered}
                      src={item.area.ensignUrl}
                      srcOnError={"/images/question.svg"}
                      width="30px"
                      heght="30px"
                      alt="country flag"
                    />
                    {item.area.name}
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
