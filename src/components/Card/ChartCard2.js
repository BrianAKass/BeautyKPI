import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function ChartCard2(props) {
  const classes = useStyles();
  return (
    <GridItem xs={props.xs} sm={props.sm} md={props.md}>
      <Card chart>
        <CardHeader color={props.color}>{props.headerContent}</CardHeader>
        <CardBody chart>
          <h3 className={classes.cardTitle}>{props.title}</h3>
          <div className={classes.cardCategory}>{props.category}</div>
          {props.cardbody}
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            {props.icon2}
            {props.lastUpdate}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
