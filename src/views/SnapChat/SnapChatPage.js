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
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <ThumbUpIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Brand Perception</p>
              <h3 className={classes.cardTitle}>Positive</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <DynamicFeedIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Trending Tag</p>
              <h3 className={classes.cardTitle}>#MoistureChallenge</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info">
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ textShadow: "0px 0px 3px #000000" }}
                >
                  <PieChart
                    style={{
                      WebkitFilter:
                        "drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7))",
                      width: "100%",
                      height: "150px",
                    }}
                    data={[
                      { title: "YouTube", value: 25, color: "#F44336" },
                      { title: "Instgram", value: 19, color: "#AB3096" },
                      { title: "Twitter", value: 8, color: "#06A4EC" },
                      { title: "SnapChat", value: 15, color: "#F7C31A" },
                      { title: "TikTok", value: 33, color: "#F6004C" },
                    ]}
                    label={({ dataEntry }) =>
                      `${Math.round(dataEntry.percentage)} %`
                    }
                    labelStyle={{
                      fontSize: "10px",
                      fontWeight: 900,
                      fill: "#ddd",
                      textShadow: "0px 0px 2px #000000",
                    }}
                    labelPosition={60}
                    animate={true}
                    animationDuration={1000}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4} style={{ color: "#eeeeee" }}>
                  {" "}
                  <p>
                    <span style={{ color: "#F44336" }}>
                      <LensIcon />
                    </span>{" "}
                    YouTube{" "}
                  </p>
                  <p>
                    <span style={{ color: "#AB3096" }}>
                      <LensIcon />
                    </span>{" "}
                    InstaGram{" "}
                  </p>
                  <p>
                    <span style={{ color: "#06A4EC" }}>
                      <LensIcon />
                    </span>{" "}
                    Twitter{" "}
                  </p>
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <p>
                    <span style={{ color: "#F7C31A" }}>
                      <LensIcon />
                    </span>{" "}
                    SnapChat{" "}
                  </p>
                  <p>
                    <span style={{ color: "#F6004C" }}>
                      <LensIcon />
                    </span>{" "}
                    TikTok{" "}
                  </p>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Social Breakdown</h4>
              <p className={classes.cardCategory}>
                Percentages based on marketing budget allocation.
              </p>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Hastag growth</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Last 24 hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Influancer Breakdown</h4>
              <p className={classes.cardCategoryWhite}>
                Keeps track of general public and influancer preferences. Order
                changes based on trending information to measure overall
                influance.
              </p>
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
                  [
                    "0",
                    "General Public",
                    "BrandX",
                    "No",
                    "Yes",
                    "No",
                    "TikTok",
                  ],
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
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning">
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <PieChart
                    style={{
                      WebkitFilter:
                        "drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7))",
                      width: "100%",
                      height: "300px",
                    }}
                    data={[
                      { title: "General Public", value: 37, color: "#1abc9c" },
                      {
                        title: "Online Influancer",
                        value: 19,
                        color: "#2ecc71",
                      },
                      { title: "Model", value: 8, color: "#0652DD" },
                      { title: "Vlogger", value: 15, color: "#c0392b" },
                      { title: "Drama Queen", value: 9, color: "#8e44ad" },
                    ]}
                    label={({ dataEntry }) =>
                      `${Math.round(dataEntry.percentage)}%`
                    }
                    labelStyle={{
                      fontSize: "6px",
                      fontWeight: 900,
                      fill: "#eeeeee",
                      textShadow: "0px 0px 3px #000000",
                    }}
                    labelPosition={70}
                    animate={true}
                    animationDuration={1000}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <p>
                    <span style={{ color: "#1abc9c" }}>
                      <LensIcon />
                    </span>{" "}
                    General Public{" "}
                  </p>
                  <p>
                    <span style={{ color: "#2ecc71" }}>
                      <LensIcon />
                    </span>{" "}
                    Online Influancer{" "}
                  </p>
                  <p>
                    <span style={{ color: "#0652DD" }}>
                      <LensIcon />
                    </span>{" "}
                    Model{" "}
                  </p>
                  <p>
                    <span style={{ color: "#c0392b" }}>
                      <LensIcon />
                    </span>{" "}
                    Vlogger{" "}
                  </p>
                  <p>
                    <span style={{ color: "#8e44ad" }}>
                      <LensIcon />
                    </span>{" "}
                    Drama Queen{" "}
                  </p>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Influencer Volume</h4>
              <p className={classes.cardCategory}>
                <span className={classes.dangerText}>
                  <Info />
                </span>{" "}
                Percentages based on Likes, views, and shares.
              </p>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}></div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
