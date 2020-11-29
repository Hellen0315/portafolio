import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBalance from "@material-ui/icons/AccountBalance";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import Home from "../Home/Home";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

class CategoryResul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " "
    };
    this.categoryChanges = this.categoryChanges.bind(this);
  }

  categoryChanges(newValue) {
    this.setState({ value: newValue });
  }

  render() {
    const { onChangeText } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            onChangeText(newValue);
            this.categoryChanges(newValue);
          }}
          showLabels
        >
          <Home />
          <BottomNavigationAction
            component={Link}
            to="/politica"
            key="1"
            value="1"
            label="Política"
            icon={<AccountBalance />}
          />
          <BottomNavigationAction
            component={Link}
            to="/internacionales"
            key="2"
            value="2"
            label="Internacionales"
            icon={<AirplanemodeActiveIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/tecnologia"
            key="3"
            value="3"
            label="Tecnología"
            icon={<DesktopMacIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/espectaculos"
            key="4"
            value="4"
            label="Espectáculos"
            icon={<AddAPhotoIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/deportes"
            key="5"
            value="5"
            label="Deportes"
            icon={<DirectionsBikeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/diseno"
            key="6"
            value="6"
            label="Diseño"
            icon={<FilterVintageIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(CategoryResul)
);
