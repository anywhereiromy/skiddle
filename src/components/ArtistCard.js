import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArtistCard = props => {
  const { artistId, name, artistImage } = props;
  return (
    <div className="artistCard" key={artistId}>
      <Link className="link" to={`/artists/${artistId}`}>
        <img className="artistThumbnail" src={artistImage} alt={name} />
        <p className="artistName">{name}</p>
      </Link>
    </div>
  );
};

ArtistCard.defaultProps = {
  name: "Event Name Unavailable",
  artistImage: "Image Unavailable"
};

ArtistCard.propTypes = {
  artistId: PropTypes.string.isRequired,
  name: PropTypes.string,
  artistImage: PropTypes.string
};

export default ArtistCard;
