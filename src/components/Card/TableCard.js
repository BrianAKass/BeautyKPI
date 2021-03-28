import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
export default function TableCard(props) {
  const classes = useStyles();
  return (
    <GridItem xs={props.xs} sm={props.sm} md={props.md}>
      <Card>
        <CardHeader color={props.color}>
          <h4 className={classes.cardTitleWhite}>{props.title}</h4>
          <p className={classes.cardCategoryWhite}>{props.category}</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="info"
            tableHead={[
              "ID",
              "Influancer",
              "Preferred Brand (mode 24 hours)",
              "Likes our brand overall",
              "Positive view of our brand",
              "Sponsored",
              "Favored Platform",
            ]}
            tableData={[
              ["0", "General Public", "BrandX", "No", "Yes", "No", "TikTok"],
              [
                "1",
                "Online Influancer",
                "BrandY",
                "yes",
                "Yes",
                "Yes",
                "Instagram",
              ],
              ["2", "Model", "BrandZ", "No", "No", "No", "Twitter"],
              ["3", "Vlogger", "BrandX", "No", "Yes", "Yes", "YouTube"],
              ["4", "Drama Queen", "BrandQ", "No", "No", "No", "SnapChat"],
            ]}
          />
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
TableCard.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  color: PropTypes.string,
  icon2: PropTypes.any,
  lastUpdate: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  headerContent: PropTypes.any,
};
