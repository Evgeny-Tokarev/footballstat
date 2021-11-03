import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const BackToTopButton = () => {
  const useStyles = makeStyles({
    backToTop: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      fontSize: "50px",
      background: "#e5e3e3",
      color: "white",
      cursor: "pointer",
      borderRadius: "100px",
      border: "none",
      boxShadow: "0 5px 10px #ccc",
      "&:hover": {
        background: "grey",
      },
    },
  });
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={classes.backToTop}>
          &#8679;
        </button>
      )}
    </>
  );
};
export default BackToTopButton;
