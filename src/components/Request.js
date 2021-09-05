import Competitions from "./MainContent/Competitions/Competitions";

function request(props) {
  fetch("http://api.football-data.org/v2/competitions/", {
    method: "GET",
    mode: "cors",
    headers: {
      "X-Auth-Token": process.env.REACT_APP_API_KEY,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      return response.competitions;
    })
    .then((competitions) => {
      for (let i = 0; i < 10; i++) {
        console.log(competitions[i]);
      }
    });
}
export default request;
