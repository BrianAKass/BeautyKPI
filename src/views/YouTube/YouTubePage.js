import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Warning from "@material-ui/icons/Warning";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GridContainer from "components/Grid/GridContainer.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import TopRowCard from "components/Card/TopRowCard";
import EmbedCard from "components/Card/EmbedCard";
import ChartCardTabs from "components/Card/ChartCardTabs";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// My Imports

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
          color="success"
          icon={<AttachMoneyIcon />}
          icon2={<Warning />}
          category="Marketing"
          title="$5,400"
          lastUpdate="Available Budget: $10,000"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="danger"
          icon={<SubscriptionsIcon />}
          icon2={<Update />}
          category="Subscribers To Our Youtube Channel"
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
          category="Brand Perception on Platform"
          title="Positive"
          lastUpdate="Last 24 Hours"
        />

        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="primary"
          icon={<DynamicFeedIcon />}
          icon2={<Update />}
          category="Top Rending Beauty Video"
          title="#MoistureChallenge"
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
      <GridContainer>
        <EmbedCard
          xs={12}
          sm={12}
          md={4}
          color="danger"
          title="Trending Beauty Video"
          embed={
            <iframe
              width="100%"
              height="335px"
              src="https://www.youtube.com/embed/q1zrv6OqPqY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          }
          category={
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> #3
              </span>{" "}
              in trending.{" "}
              <span>
                <ThumbUpIcon className={classes.upArrowCardCategory} /> 450M
                Likes
              </span>{" "}
            </p>
          }
          icon2={<AccessTime />}
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCardTabs color="danger" />
      </GridContainer>
    </div>
  );
}
