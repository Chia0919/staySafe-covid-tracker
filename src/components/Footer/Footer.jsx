import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#f5f5f5",
    color: "black",
    textAlign: "center",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        Made in MCO - 2020 CHIA development
      </Typography>
    </div>
  );
}
