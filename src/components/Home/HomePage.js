import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

class HomeResul extends Component {
  render() {
    const { onHome, classes } = this.props;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value="0"
          onChange={(event, newValue) => {
            onHome(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            component={Link}
            to="/"
            key="0"
            value="0"
            label="Inicio"
            icon={<RestoreIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(HomeResul));
