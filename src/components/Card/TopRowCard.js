import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function TopRowCard(props) {
  const classes = useStyles();
  return (
    <GridItem xs={props.xs} sm={props.sm} md={props.md}>
      <Card>
        <CardHeader color={props.color} stats icon>
          <CardIcon color={props.color}>{props.icon}</CardIcon>
          <p className={classes.cardCategory}>{props.category}</p>
          <h3 className={classes.cardTitle}>{props.title}</h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            {props.icon2}
            {props.lastUpdate}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
TopRowCard.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.any,
  icon2: PropTypes.any,
  lastUpdate: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  headerContent: PropTypes.any,
};
