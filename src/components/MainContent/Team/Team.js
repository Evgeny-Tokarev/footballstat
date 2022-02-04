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
function Team() {
  let { id } = useParams();
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [team, setTeam] = useState({});
  let options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    timezone: "UTC",
  };
  useEffect(() => {
    fetch(`https://api.football-data.org/v2/teams/${id}`, {
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
            setTeam({ name: result.name, crestUrl: result.crestUrl });
            fetch(`https://api.football-data.org/v2/teams/${id}/matches`, {
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
              .then((result) => {
                console.log(result);
                if (result) {
                  setItems(result.matches);
                }
              });
            setIsLoaded(true);
          } else {
            setIsLoaded(true);
            setTeam(null);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);
  console.log("After use effect");
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
    if (!team) {
      return (
        <div className={classes.block}>
          <Typography
            variant="h4"
            component="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            No team
          </Typography>
        </div>
      );
    } else if (items.length) {
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
            {team.name}
          </Typography>
          <DateSearch setMatches={setItems} matches={items} />
          <img width="50" heght="50" src={team.crestUrl} alt="Team crest" />
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="right">Home TEam</TableCell>
                  <TableCell align="right">Away TEam</TableCell>
                  <TableCell align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {new Date(item.utcDate).toLocaleString(
                        undefined,
                        options
                      )}
                    </TableCell>
                    <TableCell align="right">{item.homeTeam.name}</TableCell>
                    <TableCell align="right">{item.awayTeam.name}</TableCell>
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
            No team
          </Typography>
        </div>
      );
    }
  }
}
export default Team;
