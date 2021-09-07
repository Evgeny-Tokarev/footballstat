function StatTable(props) {
  useEffect(() => {
    fetch(`http://api.football-data.org/v2/${props.path}/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Auth-Token": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result[props.path]);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [props.path]);
}
