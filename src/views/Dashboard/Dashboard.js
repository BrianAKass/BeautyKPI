import React from "react";
import ChartistGraph from "react-chartist";
import DateRange from "@material-ui/icons/DateRange";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TimelineIcon from "@material-ui/icons/Timeline";
import BarChartIcon from "@material-ui/icons/BarChart";
import PieChartIcon from "@material-ui/icons/PieChart";
import TopRowCard from "components/Card/TopRowCard";
import ChartCard from "components/Card/ChartCard";
import TableCard from "components/Card/TableCard";
import PieChartSocial from "components/PieChart/PieChartSocialBreakdown";

import { dailySalesChart, emailsSubscriptionChart } from "variables/charts.js";

// My Imports
import PieChartInfluancer from "components/PieChart/PieChartInfluancer";

export default function Dashboard() {
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
        <ChartCard
          xs={12}
          sm={12}
          md={4}
          color="success"
          icon={<TimelineIcon />}
          icon2={<AccessTime />}
          category="55% increase in todays sales."
          title="Daily Sales"
          cardbody={
            <ChartistGraph
              className="ct-chart"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          }
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCard
          xs={12}
          sm={12}
          md={4}
          color="info"
          icon={<PieChartIcon />}
          icon2={<AccessTime />}
          category="Percentages based on marketing budget allocation."
          title="Social Breakdown"
          cardbody={<PieChartSocial />}
          lastUpdate="updated 4 minutes ago"
        />
        <ChartCard
          xs={12}
          sm={12}
          md={4}
          color="warning"
          icon={<BarChartIcon />}
          icon2={<AccessTime />}
          category="Last Campaign Performance"
          title="Hashtag Growth"
          cardbody={
            <ChartistGraph
              className="ct-chart"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          }
          lastUpdate="Last 24 Hours"
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
        <ChartCard
          xs={12}
          sm={12}
          md={4}
          color="warning"
          icon={<PieChartIcon />}
          icon2={<AccessTime />}
          category="Percentages based on Likes, views, and shares."
          title="Influancer Breakdown"
          cardbody={<PieChartInfluancer />}
          lastUpdate="Last 24 Hours"
        />
      </GridContainer>
    </div>
  );
}
