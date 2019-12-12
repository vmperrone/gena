import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "material-ui/styles";
import PropTypes from "prop-types";
import { BottomBar } from "../MainPage";
import page_one from "../../../pages/page_1.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#77FDC8"
    },
    secondary: {
      main: "#3c3c3c"
    },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const styles = {
  Paper: {
    backgroundColor: "transparent",
    height: "105vh",
    display: "flex",
    alignItems: "center"
  },
  Paper2: {
    textAlign: "center",
    fontWeight: "bold",
    fontColor: "#fafafa",
    margin: "auto",
    display: "flex",
    alignItems: "center"
  },
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  image: {
    fontWeight: "bold",
    backgroundColor: "#fafafa",
    width: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center"
  }
};

function FloatingActionButtons() {
  return (
    /*
    <Fragment>
      <body>
        <div style={{ width: "100%", height: "600px" }}>
          <a-scene background="color: #ECECEC" embedded>
            <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
            <a-cylinder
              position="1 0.75 -3"
              radius="0.5"
              height="1.5"
              color="#FFC65D"
            />
            <a-plane
              position="0 0 -4"
              rotation="-90 0 0"
              width="4"
              height="4"
              color="#7BC8A4"
            />
          </a-scene>
        </div>
      </body>
    </Fragment>
    */
    <Fragment>
      <script src="https://d3js.org/d3.v4.min.js" />
      <script src="https://aframe.io/releases/0.9.1/aframe.min.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

      <div
        id="Pageimage"
        style={{
          width: "100%",
          maxWidth: "850px",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "100px",
          display: "block"
        }}
      >
        <img
          onClick={BottomBar.ChangePageBack}
          id="page-image"
          src={page_one}
          style={{
            width: "100%",
            maxWidth: "850px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "70px",
            display: "block",
            boxShadow:
              "2px 2px 8px 0 rgba(0, 0, 0, 0.2), 1px 1px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "15px"
          }}
          alt="PageImage"
        />
      </div>
    </Fragment>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
