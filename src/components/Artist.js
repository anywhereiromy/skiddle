import React from "react";
import PropTypes from "prop-types";
import { getData } from "../helpers/functions";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import apiKey from "../apiKey";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistData: {},
      artistId: ""
    };
  }

  async componentWillMount() {
    const artistId = this.props.history.location.pathname.slice(9);
    if (artistId) {
      const artistData = await getData({
        route: `/artist/${artistId}/?api_key=${apiKey}`
      });
      this.setState({ artistId, artistData: artistData.results });
    }
  }

  render() {
    const { artistData } = this.state;
    return (
      <div className="artistContainer">
        <BackButton handleClick={this.props.history.goBack} />
        <header className="artistHeader">{artistData.name}</header>
        <img className="artistImage" src={artistData.imageurl} alt="artist" />
        <p className="artistDescription">{artistData.description}</p>
        <div>
          {artistData.artists &&
            artistData.artists.map(artist => {
              return (
                <div key={artist.artistid}>
                  <Link className="link" to={`/artists/${artist.artistid}`}>
                    {artist.name}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

Artist.propTypes = {
  history: PropTypes.object.isRequired
};

export default Artist;
