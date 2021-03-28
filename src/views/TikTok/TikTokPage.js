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
import TopRowCard from "components/Card/TopRowCard";
import ChartCard2 from "components/Card/ChartCard2";
import TableCard from "components/Card/TableCard";
import Increase from "../Filler content/Increase";
import TabsFiller from "../Filler content/TabsFiller";
import PieChartSocial from "components/PieChart/PieChartSocialBreakdown";
import PieChartInfluancer from "components/PieChart/PieChartInfluancer";

import { dailySalesChart, emailsSubscriptionChart } from "variables/charts.js";

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
