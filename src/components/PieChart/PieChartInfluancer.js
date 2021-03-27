import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import LensIcon from "@material-ui/icons/Lens";
import { PieChart } from "react-minimal-pie-chart";
// My Imports
export default function PieChartInfluancer() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={6}>
        <PieChart
          style={{
            WebkitFilter: "drop-shadow( 0px 0px 2px rgba(0, 0, 0, .7))",
            width: "100%",
            height: "375px",
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
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
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
  );
}
