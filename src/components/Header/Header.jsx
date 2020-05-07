import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import logo from "../../images/coronavirus.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  header: {
    background: "white",
    color: "#c7d8f2",
  },
  logo: {
    // width: "10%",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.header}>
        <Toolbar>
          <img src={logo} width={50} alt="logo" />
          <div>
            <Typography
              component="div"
              style={{ display: "flex", paddingLeft: "6px" }}
            >
              <Typography variant="h6" style={{ fontSize: "16px" }}>
                Stay
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#282c34",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                SAFE
              </Typography>
            </Typography>
            <Typography
              style={{
                color: "#282c34",
                fontWeight: "bold",
                paddingLeft: "6px",
                fontSize: "14px",
              }}
            >
              COVID-19 Tracker
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box my={2}>{children}</Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
