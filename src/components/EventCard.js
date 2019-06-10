import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { parseDate } from "../helpers/functions";

const EventCard = ({
  eventId,
  eventName,
  description,
  imageUrl,
  eventDate,
  eventTown
}) => {
  return (
    <div className="eventCard eventCardContainer" key={eventId}>
      <Link to={`/events/${eventId}`} className="eventCard link">
        <h1 className="eventCardTitle">{eventName.toUpperCase()}</h1>
        <img src={imageUrl} alt={`${eventName} Logo`} className="thumbnail" />
      </Link>
      <p className="eventCardInfo">{parseDate(eventDate)}</p>
      <p className="eventCardInfo">{eventTown}</p>
      <p className="shortDescription eventCardInfo">{description}</p>
    </div>
  );
};

EventCard.defaultProps = {
  eventName: "Event Name Unavailable",
  description: "Description Unavailable",
  imageUrl: "Image Unavailable",
  eventDate: "Date Unavailable"
};

EventCard.propTypes = {
  eventId: PropTypes.string.isRequired,
  eventName: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  eventDate: PropTypes.string
};

export default EventCard;
