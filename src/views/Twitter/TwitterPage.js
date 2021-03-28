import React, { useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LensIcon from "@material-ui/icons/Lens";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import TopRowCard from "components/Card/TopRowCard";
import EmbedCard from "components/Card/EmbedCard";
import ChartCard from "components/Card/ChartCard";
import ChartCardTabs from "components/Card/ChartCardTabs";

import { twitterChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// My Imports
import Twitter from "@material-ui/icons/Twitter";
import TimelineIcon from "@material-ui/icons/Timeline";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    }
  }, []);
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
          category="Marketing Budget"
          title="$3,000"
          lastUpdate="Available Budget: $10,000"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="info"
          icon={<Twitter />}
          icon2={<Update />}
          category="Followers on instagram"
          title="-600"
          lastUpdate="Last 24 Hours"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="danger"
          icon={<ThumbDownIcon />}
          icon2={<Update />}
          category="Brand Perception on Platform"
          title="Negative"
          lastUpdate="Last 24 Hours"
        />

        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="primary"
          icon={<DynamicFeedIcon />}
          icon2={<DateRange />}
          category="Top Rending Beauty Video"
          title="#CancelBrandX"
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <EmbedCard
            xs={12}
            sm={12}
            md={12}
            color="info"
            title="Trending InstaGram Post"
            embed={
              <div>
                <blockquote className="twitter-tweet">
                  <p lang="en" dir="ltr">
                    Click the link to see my latest empties video with some
                    speed reviews ❄️ Happy December! LINK:{" "}
                    <a href="https://t.co/lbj8jrZXu5">
                      https://t.co/lbj8jrZXu5
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/youtuber?src=hash&amp;ref_src=twsrc%5Etfw">
                      #youtuber
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/makeup?src=hash&amp;ref_src=twsrc%5Etfw">
                      #makeup
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/beauty?src=hash&amp;ref_src=twsrc%5Etfw">
                      #beauty
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/empties?src=hash&amp;ref_src=twsrc%5Etfw">
                      #empties
                    </a>{" "}
                    <a href="https://twitter.com/hashtag/makeupaddict?src=hash&amp;ref_src=twsrc%5Etfw">
                      #makeupaddict
                    </a>{" "}
                    <a href="https://t.co/750E0nffQ9">
                      pic.twitter.com/750E0nffQ9
                    </a>
                  </p>
                  &mdash; J O R D A N . (@Hanscomj){" "}
                  <a href="https://twitter.com/Hanscomj/status/1334193995057147906?ref_src=twsrc%5Etfw">
                    December 2, 2020
                  </a>
                </blockquote>{" "}
              </div>
            }
            category="40,000 Likes"
            icon2={<AccessTime />}
            lastUpdate="updated 4 minutes ago"
          />
          <ChartCard
            xs={12}
            sm={12}
            md={12}
            color="info"
            icon={<TimelineIcon />}
            icon2={<AccessTime />}
            category="#Trends (per hour)"
            title="Trending Tags"
            cardbody={
              <div>
                <ChartistGraph
                  className="ct-chart"
                  data={twitterChart.data}
                  type="Line"
                  options={twitterChart.options}
                  listener={twitterChart.animation}
                />
                <p className={classes.cardCategory}>
                  <span className={classes.stats}>
                    <LensIcon style={{ color: "#ee22ee" }} />
                  </span>{" "}
                  CancelX{" "}
                  <span>
                    <LensIcon className={classes.stats} />
                  </span>{" "}
                  MUTipz{" "}
                  <span className={classes.stats}>
                    <LensIcon />
                  </span>{" "}
                  Reinvention{" "}
                  <span className={classes.stats}>
                    <LensIcon />
                  </span>{" "}
                  NuLook{" "}
                  <span className={classes.stats}>
                    <LensIcon />
                  </span>{" "}
                  glamazon{" "}
                </p>
              </div>
            }
            lastUpdate="updated 4 minutes ago"
          />
        </GridItem>
        <ChartCardTabs color="info" />
      </GridContainer>
    </div>
  );
}
