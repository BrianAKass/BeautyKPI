import React from "react";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GridContainer from "components/Grid/GridContainer.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TopRowCard from "components/Card/TopRowCard";
import EmbedCard from "components/Card/EmbedCard";
import ChartCardTabs from "components/Card/ChartCardTabs";

// My Imports
import Instagram from "@material-ui/icons/Instagram";

export default function Dashboard() {
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
          title="$18,000"
          lastUpdate="Available Budget: $10,000"
        />
        <TopRowCard
          xs={12}
          sm={6}
          md={3}
          color="primary"
          icon={<Instagram />}
          icon2={<Update />}
          category="Followers on instagram"
          title="+950"
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
          icon2={<DateRange />}
          category="Top Rending Beauty Video"
          title="#MakeupTutorial"
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
      <GridContainer>
        <EmbedCard
          xs={12}
          sm={12}
          md={4}
          color="primary"
          title="Trending InstaGram Post"
          embed={<h1> YOUR EMBED HERE</h1>}
          category="40,000 Likes"
          icon2={<AccessTime />}
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCardTabs color="primary" />
      </GridContainer>
    </div>
  );
}
