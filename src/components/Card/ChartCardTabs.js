import React from "react";
import PropTypes from "prop-types";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Code from "@material-ui/icons/Code";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import TextField from "@material-ui/core/TextField";

export default function ChartCardTabs(props) {
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
  return (
    <GridItem xs={12} sm={12} md={8}>
      <CustomTabs
        title="Influancer Breakdown:"
        headerColor={props.color}
        tabs={[
          {
            tabName: "Top Influancers",
            tabIcon: ArrowUpward,
            tabContent: (
              <Table
                tableHeaderColor={props.color}
                tableHead={[
                  "ID",
                  "Influancer",
                  "Notes",
                  "Subscribers",
                  "Avg. View Count",
                  "Favorite Brand",
                  "Likes Us",
                  "% Users Refs",
                  "Sponsored by us",
                  "Demonitized?",
                ]}
                tableData={[
                  [
                    "1",
                    "PreechyKeen",
                    <TextField
                      id="standard-multiline-flexible"
                      key="a"
                      fullWidth
                      multiline
                      rowsMax={4}
                      value={value}
                      onChange={handleChange}
                    />,
                    "300M",
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
                      key="b"
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
                      key="c"
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
                      key="d"
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
                      key="e"
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
                  ["1", "XPress Route", "80k", "Yes", "30s", "12-25", "Yes"],
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
  );
}

ChartCardTabs.propTypes = {
  color: PropTypes.string,
};
