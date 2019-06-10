// Allows users to search events by keyword

import React from "react";
import { getData } from "../helpers/functions";
import EventCard from "./EventCard";

const apiKey = "008f1e6099ecc48e990e3776784d447b";
const url = `/events/search/?api_key=${apiKey}&description=true&keyword=`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      keyword: value
    });
  }

  async handleKeyDown(event) {
    if (event.key === "Enter") {
      const data = await getData({ route: `${url}${event.target.value}` });
      this.setState({
        data: data.results
      });
    }
  }

  render() {
    const { keyword, data } = this.state;
    return (
      <div className="searchContainer">
        <input
          type="text"
          value={keyword}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className={keyword ? "searchBar" : "searchBar withIcon"}
          placeholder="Enter Keyword..."
        />
        <div className="searchResults">
          {data[0] &&
            data.map(searchResult => {
              return (
                <EventCard
                  key={searchResult.id}
                  eventId={searchResult.id}
                  eventName={searchResult.eventname}
                  description={searchResult.description}
                  imageUrl={searchResult.imageurl}
                  eventDate={searchResult.startdate}
                  eventTown={searchResult.venue.town}
                />
              );
            })}
          {!!!data[0] && <p className="noResults"> No Results. </p>}
        </div>
      </div>
    );
  }
}

export default Search;
