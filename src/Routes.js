import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import Artist from "./components/Artist";
import Search from "./components/Search";

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Search props={this.props} {...props} />}
        />
        <Route
          path="/events/:eventId"
          render={props => <EventDetails props={this.props} {...props} />}
        />
        <Route
          path="/artists/:artistId"
          render={props => <Artist props={this.props} {...props} />}
        />
      </Switch>
    );
  }
}

export default Routes;
