import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import Info from "@material-ui/icons/Info";
import DateRange from "@material-ui/icons/DateRange";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import LocalOffer from "@material-ui/icons/LocalOffer";
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
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { bugs, website, server } from "variables/general.js";
import TextField from "@material-ui/core/TextField";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// My Imports
import { PieChart } from "react-minimal-pie-chart";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import InstagramEmbed from "react-instagram-embed";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(`Vegan. Opposes animal testing.`);
  const [balue, setBalue] = React.useState("Known For Doing Challenges");
  const [calue, setCalue] = React.useState(
    "Copies Pop Culture Fashion. Check for popular female leads."
  );
  const [dalue, setDalue] = React.useState(
    "Promotes cancel culture. May be risky"
  );
  const [ealue, setEalue] = React.useState(
    "LongForm Entertaininer. Older audiance key demograph"
  );
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setBalue(event.target.value);
  };
  const handleChange3 = (event) => {
    setCalue(event.target.value);
  };
  const handleChange4 = (event) => {
    setDalue(event.target.value);
  };
  const handleChange5 = (event) => {
    setEalue(event.target.value);
  };
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <AttachMoneyIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Marketing Budget</p>
              <h3 className={classes.cardTitle}>$18,000</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Warning />
                Available Budget: $10,000
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Instagram />
              </CardIcon>
              <p className={classes.cardCategory}>Followers On Instagram</p>
              <h3 className={classes.cardTitle}>+950</h3>
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
              <p className={classes.cardCategory}>
                Brand Perception on Platform
              </p>
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
              <p className={classes.cardCategory}>
                Top Trending Beauty Hashtag
              </p>
              <h3 className={classes.cardTitle}>#makeuptutorial</h3>
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
            <CardHeader color="primary">
              <h1>YOUR EMBED HERE</h1>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Trending Instagram Posts</h4>
              <p className={classes.cardCategory}>40,000 Likes</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <CustomTabs
            title="Influancer Breakdown:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Top Influancers",
                tabIcon: ArrowUpward,
                tabContent: (
                  <Table
                    tableHeaderColor="info"
                    tableHead={[
                      "ID",
                      "Influancer",
                      "Notes",
                      "Followers",
                      "Avg. Likes/Post",
                      "Favorite Brand",
                      "Likes Us",
                      "% Users Refs",
                      "Sponsored by us",
                      "platformed",
                    ]}
                    tableData={[
                      [
                        "1",
                        "PreechyKeen",
                        <TextField
                          id="standard-multiline-flexible"
                          fullWidth
                          multiline
                          rowsMax={4}
                          value={value}
                          onChange={handleChange}
                        />,
                        "300k",
                        "250k",
                        "BrandX",
                        "No",
                        "43%",
                        "No",
                        "No",
                      ],
                      [
                        "2",
                        "Bew T. Qween",
                        <TextField
                          id="standard-multiline-flexible"
                          fullWidth
                          multiline
                          rowsMax={4}
                          value={balue}
                          onChange={handleChange2}
                        />,
                        "245M",
                        "168K",
                        "Our Brand",
                        "Yes",
                        "36%",
                        "Yes",
                        "No",
                      ],
                      [
                        "3",
                        "StarStruck",
                        <TextField
                          id="standard-multiline-flexible"
                          fullWidth
                          multiline
                          rowsMax={4}
                          value={calue}
                          onChange={handleChange3}
                        />,
                        "208M",
                        "108K",
                        "BrandZ",
                        "No",
                        "22%",
                        "No",
                        "No",
                      ],
                      [
                        "4",
                        "Drama Donna",
                        <TextField
                          id="standard-multiline-flexible"
                          fullWidth
                          multiline
                          rowsMax={4}
                          value={dalue}
                          onChange={handleChange4}
                        />,
                        "104M",
                        "112K",
                        "BrandD",
                        "Yes",
                        "33%",
                        "No",
                        "Yes",
                      ],
                      [
                        "5",
                        "Wine N Fine",
                        <TextField
                          id="standard-multiline-flexible"
                          fullWidth
                          multiline
                          rowsMax={4}
                          value={ealue}
                          onChange={handleChange5}
                        />,
                        "88M",
                        "92K",
                        "Our Brand",
                        "Yes",
                        "28%",
                        "Yes",
                        "No",
                      ],
                    ]}
                  />
                ),
              },
              {
                tabName: "Ad Campaigns",
                tabIcon: Code,
                tabContent: (
                  <Table
                    tableHeaderColor="info"
                    tableHead={[
                      "ID",
                      "Ad Title",
                      "Average clicks per day",
                      "Skippable?",
                      "Run Time",
                      "Market",
                      "Mentioned Favorably",
                    ]}
                    tableData={[
                      ["0", "QuickN EZ", "40k", "No", "5s", "18-30", "Yes"],
                      [
                        "1",
                        "XPress Route",
                        "80k",
                        "Yes",
                        "30s",
                        "12-25",
                        "Yes",
                      ],
                      ["2", "Shock N Aww", "12K", "No", "30s", "20-45", "No"],
                      [
                        "3",
                        "Discovery",
                        "67K",
                        "yes",
                        "60s",
                        "LGBTQ+ All Ages",
                        "Yes",
                      ],
                      ["4", "Tiger Stripes", "8k", "Yes", "120s", "35+", "No"],
                      ["4", "SuperHero", "38k", "Yes", "15s", "18-30", "Yes"],
                    ]}
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
