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
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  block: {
    marginTop: "2rem",
  },
});

function Matches(props) {
  let { id } = useParams();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [competition, setCompetition] = useState([]);
  useEffect(() => {
    fetch(`http://api.football-data.org/v2/competitions/${id}/matches`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then(
        (result) => {
          console.log(result);
          if (result) {
            setItems(result.matches);
            setCompetition(result.competition.name);
            setIsLoaded(true);
          } else {
            setIsLoaded(true);
            setCompetition(null);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    if (!competition) {
      return (
        <div className={classes.block}>
          <Typography
            variant="h4"
            component="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            No matches
          </Typography>
        </div>
      );
    } else
      return (
        <div className={classes.block}>
          <Typography
            variant="h4"
            component="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            {competition}
          </Typography>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Winner</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.status}
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
export default Matches;
