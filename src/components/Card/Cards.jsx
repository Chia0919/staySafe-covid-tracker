import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Info = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  selected,
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="flex-start">
        <Grid
          item
          xs={12}
          md={12}
          component={Card}
          className={cx(styles.cardHeader)}
        >
          <Typography component="div" style={{ marginBottom: "10px" }}>
            {selected}
          </Typography>
          <Typography
            component="div"
            style={{ borderTop: "1px solid #e6e5e5" }}
          >
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              {country} Overview{" "}
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}{" "}
              </Typography>
            </Typography>
          </Typography>
          <Grid container justify="center">
            <Grid
              item
              xs={4}
              style={{ alignItem: "center", textAlign: "center" }}
            >
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  color: "#e53e3e",
                  fontWeight: 700,
                }}
              >
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ color: "#718096", fontWeight: "bold" }}
              >
                Confirmed
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ alignItem: "center", textAlign: "center" }}
            >
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  color: "#38a169",
                  fontWeight: 700,
                }}
              >
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ color: "#718096", fontWeight: "bold" }}
              >
                Recovered
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ alignItem: "center", textAlign: "center" }}
            >
              <Typography
                variant="h6"
                color="textPrimary"
                style={{
                  color: "#718096",
                  fontWeight: 700,
                }}
              >
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                style={{ color: "#718096", fontWeight: "bold" }}
              >
                Deaths
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    // <div className={styles.container}>
    //     <Grid container spacing={3} justify="center">
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.infected)}
    //     >
    //       <CardContent>
    //         <Typography color="textSecondary" gutterBottom>
    //           Infected
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={confirmed.value}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textSecondary">
    //           {new Date(lastUpdate).toDateString()}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of active cases of COVID-19.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //   </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.recovered)}
    //     >
    //       <CardContent>
    //         <Typography color="textSecondary" gutterBottom>
    //           Recovered
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={recovered.value}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textSecondary">
    //           {new Date(lastUpdate).toDateString()}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of recoveries from COVID-19.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //     <Grid
    //       item
    //       xs={12}
    //       md={3}
    //       component={Card}
    //       className={cx(styles.card, styles.deaths)}
    //     >
    //       <CardContent>
    //         <Typography color="textSecondary" gutterBottom>
    //           Deaths
    //         </Typography>
    //         <Typography variant="h5" component="h2">
    //           <CountUp
    //             start={0}
    //             end={deaths.value}
    //             duration={2.75}
    //             separator=","
    //           />
    //         </Typography>
    //         <Typography color="textSecondary">
    //           {new Date(lastUpdate).toDateString()}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           Number of deaths caused by COVID-19.
    //         </Typography>
    //       </CardContent>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};
export default Info;
