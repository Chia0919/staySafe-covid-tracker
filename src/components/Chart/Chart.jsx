import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Card, Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: [
          `${t("overview.confirm")}`,
          `${t("overview.recover")}`,
          `${t("overview.death")}`,
        ],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#e53e3e", "#38a169", "#718096"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: `${t("overview.confirm")}`,
            // backgroundColor: "#e53e3e",
            borderColor: "#e53e3e",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: `${t("overview.recover")}`,

            // backgroundColor: "#e53e3e",
            borderColor: "#38a169",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: `${t("overview.death")}`,

            borderColor: "#718096",
            // backgroundColor: "#718096",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      <Grid container justify="flex-start">
        <Grid item xs={12} md={12} component={Card} style={{ padding: "12px" }}>
          {country ? barChart : lineChart}
        </Grid>
      </Grid>
    </div>
  );
};

export default Chart;
