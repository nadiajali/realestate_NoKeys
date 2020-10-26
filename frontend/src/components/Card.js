import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="card">
      <h3 className="card_title">{props.title}</h3>
      <div className="card_header">
        <img className="card_header_photo" src={props.photo_main} alt="House" />
      </div>
      <p className="card_location">
        {props.address} {props.city}, {props.state}
      </p>
      <div className="row">
        <div className="col-2-of-3">
          <p className="card_info">Price: ${numberWithCommas(props.price)}</p>
          <p className="card_info">Bedrooms: {props.bedrooms}</p>
          <p className="card_info">Bathrooms: {props.bathrooms}</p>
        </div>
        <div className="col-2-of-3">
          <p className="card_saletype">{props.sale_type}</p>
          <p className="card_hometype">{props.home_type}</p>
          <p className="card_sqft">SqFt: {props.sqft}</p>
        </div>
      </div>
      <Link className="card_link" to={`/listings/${props.slug}`}>
        View Listing
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo_main: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.string.isRequired,
  sale_type: PropTypes.string.isRequired,
  home_type: PropTypes.string.isRequired,
  sqft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
