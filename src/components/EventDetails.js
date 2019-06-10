import React from "react";
import PropTypes from "prop-types";
import { getData } from "../helpers/functions";
import BackButton from "./BackButton";
import ArtistCard from "./ArtistCard";
import apiKey from "../apiKey";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: {},
      eventId: ""
    };
  }

  async componentWillMount() {
    const eventId = this.props.history.location.pathname.slice(8);
    if (eventId) {
      const eventData = await getData({
        route: `/events/${eventId}/?api_key=${apiKey}`
      });
      this.setState({ eventId, eventData: eventData.results });
    }
  }

  render() {
    const { eventData } = this.state;
    return (
      <div className="eventContainer">
        <BackButton handleClick={this.props.history.goBack} />
        <header className="artistHeader">{eventData.eventname}</header>
        <img src={eventData.largeimageurl} alt="Event" />
        <p>{eventData.description}</p>
        {eventData.artists && (
          <div className="browseDiv">Browse Artists Playing</div>
        )}
        <div>
          {eventData.artists &&
            eventData.artists.map(artist => {
              return (
                <ArtistCard
                  key={artist.artistid}
                  artistId={artist.artistid}
                  name={artist.name}
                  artistImage={artist.image}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

EventDetails.propTypes = {
  history: PropTypes.object.isRequired
};

export default EventDetails;
