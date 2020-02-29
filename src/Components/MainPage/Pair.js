import React, {Fragment, useEffect, useRef, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import {createMuiTheme} from "material-ui/styles";
import PropTypes from "prop-types";
import pages from "../../pages";
import {FaVolumeMute, FaVolumeUp} from 'react-icons/fa';

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
  },
  AFrameWrapper: {
    width: "100%",
    backgroundColor: 'white',
    height: "calc(100vh - 66px)",
    position: "relative",
  },
  Icon: {
    color: 'white',
    fontSize: '22px',
    position: 'absolute',
    right: '8px',
    top: '8px',
    cursor: 'pointer',
    zIndex: '999',
  }
};

function Pair({ classes, pageIndex, changePage }) {

  let [volumeOn, setVolumeOn] = useState(true);
  useEffect(() => {
    let volume = localStorage.getItem('volume');
    if (volume === 'false') {
      setVolumeOn(false);
    }
  }, [])
  let toggleVolume = (state) => {
    setVolumeOn(state);
    localStorage.setItem('volume', state);
  }
  let audioRef = useRef(new Audio)
  useEffect(() => {
    let audio = pages[pageIndex] && pages[pageIndex].audio;
    audioRef.current.src = audio || '';
    if (audio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [pageIndex]);
  useEffect(() => {
    if (volumeOn) {
      console.log('on');
      audioRef.current.volume = 1;
    } else {
      console.log('off');
      audioRef.current.volume = 0;
    }
  }, [volumeOn])

  let page = pages[pageIndex];
  let content;
  switch (page.type) {
    case 'image':
      content = (
        <img
          id="page-image"
          onClick={() => changePage(1)}
          src={page.src}
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
      );
      break;
    case 'aframe':
      let Component = page.src;
      content = (
        <div
          className={classes.AFrameWrapper}
        >
          <Component/>
        </div>
      );
      break;
    default:
      content = (
        null
      );
      break;
  }

  const audioIcon = page.audio ? (
    volumeOn ? (
      <FaVolumeUp style={styles.Icon} onClick={() => toggleVolume(false)} />
    ) : (
      <FaVolumeMute style={styles.Icon} onClick={() => toggleVolume(true)}/>
    )
  ) : null;

  return (
    <Fragment>
      <script src="https://d3js.org/d3.v4.min.js"/>
      <script src="https://aframe.io/releases/0.9.1/aframe.min.js"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

      <div
        id="Pageimage"
        style={{
          width: "100%",
          maxWidth: "850px",
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "100px",
          display: "block",
          position: "relative"
        }}
      >
        {audioIcon}
        {content}
      </div>
    </Fragment>
  );
}

Pair.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pair);
