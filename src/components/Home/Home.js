import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import findHome from "../../redux/actions/findHome";
import HomePage from "./HomePage";

class Home extends Component {
  componentDidMount() {
    this.onHome();
  }

  onHome = () => {
    const { findHome } = this.props;
    findHome();
  };

  render() {
    return <HomePage onHome={this.onHome} />;
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  };
};
const mapDispatchToProps = {
  findHome
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
