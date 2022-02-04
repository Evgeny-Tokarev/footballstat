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
import { useParams } from "react-router-dom";
import BackToTopButton from "../BackToTopButton";
import DateSearch from "../DateSearch";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  block: {
    marginTop: "2rem",
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

function Matches(props) {
  console.log("начало компонента");
  let { id } = useParams();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [competition, setCompetition] = useState([]);
  useEffect(() => {
    console.log("начало эффекта");

    fetch(`https://api.football-data.org/v2/competitions/${id}/matches`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("200");
          return res.json();
        } else {
          return null;
        }
      })
      .then(
        (result) => {
          if (result) {
            setItems(result.matches);
            setCompetition(
              result.competition.name + " " + result.competition.area.name
            );
            setIsLoaded(true);
          } else {
            setIsLoaded(true);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

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
    console.log("Loading...");
    return <div className={classes.message}>Загрузка...</div>;
  } else {
    if (!competition.length) {
      return (
        <div className={classes.block}>
          <Typography
            variant="h4"
            component="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            No matches available for this competition.
          </Typography>
        </div>
      );
    } else {
      console.log("рендер     " + items.length);

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
            {competition}
          </Typography>
          <DateSearch setMatches={setItems} matches={items} />
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="center" colSpan={2}>
                    Match
                  </TableCell>
                  <TableCell align="right">Winner</TableCell>

                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="left" component="th" scope="row">
                      {new Date(item.utcDate).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "numeric",
                        timezone: "UTC",
                      })}
                    </TableCell>
                    <TableCell align="left" component="th" scope="row">
                      {item.homeTeam.name}
                    </TableCell>
                    <TableCell align="right" component="th" scope="row">
                      {item.awayTeam.name}
                    </TableCell>
                    <TableCell align="right">
                      {item.status === "FINISHED"
                        ? item.score.winner === "DRAW"
                          ? "Draw"
                          : item.score.winner === "HOME_TEAM"
                          ? item.homeTeam.name
                          : item.awayTeam.name
                        : "---"}
                    </TableCell>
                    <TableCell align="right">
                      {item.status === "FINISHED"
                        ? item.score.fullTime.homeTeam +
                          " : " +
                          item.score.fullTime.awayTeam
                        : "---"}
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
}
export default Matches;
