import React from "react";
function Request(props) {
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
      console.log(response.competitions);
    });
  return <p>qwerty</p>;
}
export default Request;
