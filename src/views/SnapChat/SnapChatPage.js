import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Info from "@material-ui/icons/Info";
import DateRange from "@material-ui/icons/DateRange";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LensIcon from "@material-ui/icons/Lens";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TimelineIcon from "@material-ui/icons/Timeline";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import TopRowCard from "components/Card/TopRowCard";
import ChartCard from "components/Card/ChartCard";
import ChartCard2 from "components/Card/ChartCard2";
import TableCard from "components/Card/TableCard";
import Increase from "../Filler content/Increase";
import TabsFiller from "../Filler content/TabsFiller";
import PieChartSocial from "components/PieChart/PieChartSocialBreakdown";
import PieChartInfluancer from "components/PieChart/PieChartInfluancer";
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// My Imports
import { PieChart } from "react-minimal-pie-chart";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="warning"
          icon={<AttachMoneyIcon />}
          icon2={<DateRange />}
          category="Revenue"
          title="34,245"
          lastUpdate="Last 24 Hours"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="info"
          icon={<Accessibility />}
          icon2={<Update />}
          category="Followers"
          title="+245"
          lastUpdate="Last 24 Hours"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="success"
          icon={<ThumbUpIcon />}
          icon2={<Update />}
          category="Overall Brand Perception"
          title="Positive"
          lastUpdate="Last 24 Hours"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="primary"
          icon={<DynamicFeedIcon />}
          icon2={<DateRange />}
          category="Trending Tag"
          title="#MoistureChallenge"
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
      <GridContainer>
        <ChartCard2
          xs={12}
          sm={12}
          md={4}
          color="success"
          headerContent={
            <ChartistGraph
              className="ct-chart"
              style={{ backgroundColor: "#ffffffa6" }}
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          }
          icon2={<AccessTime />}
          category={<Increase />}
          title="Daily Sales"
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCard2
          xs={12}
          sm={12}
          md={4}
          color="info"
          headerContent={<PieChartSocial />}
          category="Percentages based on marketing budget allocation."
          title="Social Breakdown"
          icon2={<AccessTime />}
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCard2
          xs={12}
          sm={12}
          md={4}
          color="warning"
          headerContent={
            <ChartistGraph
              style={{ backgroundColor: "#ffffffa6" }}
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          }
          icon2={<AccessTime />}
          category={<Increase />}
          title="Hashtag Growth"
          lastUpdate="Last Campaign Performance"
        />
      </GridContainer>

      <GridContainer>
        <TableCard
          xs={12}
          sm={12}
          md={6}
          color="info"
          icon2={<AccessTime />}
          title="Influancer Breakdown"
          category="Keeps track of general public and influancer preferences. Order changes based on trending information to measure overall influance."
          cardbody={
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
          }
          lastUpdate="Last 24 Hours"
        />
        <ChartCard2
          xs={12}
          sm={12}
          md={6}
          color="warning"
          headerContent={<PieChartInfluancer />}
          category="Percentages based on Likes, views, and shares."
          title="Influancer Breakdown"
          icon2={<AccessTime />}
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
      <TabsFiller />
    </div>
  );
}
