import React, { Component, Fragment } from "react";
import { Header, Pair, BottomBar } from "./MainPage";
import JssProvider from "react-jss/lib/JssProvider";
import pages from '../pages';

const LEFT = 37,
  UP = 38,
  RIGHT = 39,
  DOWN = 40;

export default class extends Component {

  state = {
    pageIndex: 0
  }

  checkKeycode = (event) => {
    let keyDownEvent = event || window.event,
      keycode = keyDownEvent.which ? keyDownEvent.which : keyDownEvent.keyCode;

    switch (keycode) {
      case LEFT:
        this.changePage(-1);
        break;
      case UP:
        break;
      case RIGHT:
        this.changePage(1);
        break;
      case DOWN:
        break;
      default:
        break;
    }

    return false;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.checkKeycode, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.checkKeycode, false);
  }

  changePage = (direction, traverse) => {
    // DH: These comments were with this code before it was moved from BottomBar...
    // fullwidth: https://i.stack.imgur.com/Qafwh.jpg
    // img1: https://i.stack.imgur.com/WMVv1.jpg
    // img2: https://i.stack.imgur.com/ddMMK.jpg
    if (direction < 0) {
      if (this.state.pageIndex > 0) {
        if (traverse) {
          this.setState({
            pageIndex: 0
          });
        } else {
          this.setState({
            pageIndex: this.state.pageIndex - 1
          });
        }
      }
    } else {
      if (this.state.pageIndex < pages.length - 1) {
        if (traverse) {
          this.setState({
            pageIndex: pages.length - 1
          });
        } else {
          this.setState({
            pageIndex: this.state.pageIndex + 1
          });
        }
      }
    }
  }

  render() {
    let { pageIndex } = this.state;

    return (
      <JssProvider>
        <Fragment>
          <Header />
          <Pair pageIndex={pageIndex} changePage={(dir) => this.changePage(dir)}/>
          <BottomBar pageIndex={pageIndex} changePage={(dir, traverse) => this.changePage(dir, traverse)}/>
        </Fragment>
      </JssProvider>
    );
  }
}
