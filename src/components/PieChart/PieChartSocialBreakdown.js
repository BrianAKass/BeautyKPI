import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import LensIcon from "@material-ui/icons/Lens";
import { PieChart } from "react-minimal-pie-chart";
// My Imports
export default function PieChartSocialBreakdown() {
  return (
    <GridContainer>
      <GridItem
        xs={12}
        sm={6}
        md={4}
        style={{ textShadow: "0px 0px 3px #000000" }}
      >
        <PieChart
          style={{
            WebkitFilter: "drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7))",
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
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
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
      <GridItem xs={12} sm={6} md={4}>
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
  );
}
