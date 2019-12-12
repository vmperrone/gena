import React, { Component, Fragment } from "react";
import { Header, Pair, BottomBar } from "./MainPage";
import JssProvider from "react-jss/lib/JssProvider";

export default class extends Component {
  render() {
    return (
      <JssProvider>
        <Fragment>
          <Header />
          <Pair />
          <BottomBar />
        </Fragment>
      </JssProvider>
    );
  }
}
