import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
export default function Increase() {
  const classes = useStyles();
  return (
    <p className={classes.cardCategory}>
      <span className={classes.successText}>
        <ArrowUpward className={classes.upArrowCardCategory} /> 55%
      </span>{" "}
      increase in today sales.
    </p>
  );
}
