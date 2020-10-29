import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";

const ListingDetail = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const [host, setHost] = useState("");
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Production Code
      setHost("https://nadiajali-realestate.herokuapp.com");
      console.log("NODE_ENV = PRODUCTION");
    } else {
      // Development Code
      setHost("http://localhost:8080");
      console.log("NODE_ENV = NOT PRODUCTION");
    }
  });

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    const slug = props.match.params.id;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:8080/api/listings/${slug}`, config)
      .then((res) => {
        setListing(res.data);
        setPrice(numberWithCommas(res.data.price));
      })
      .catch((err) => {});
  }, [props.match.params.id]);

  useEffect(() => {
    const id = listing.realtor;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    if (id) {
      axios
        .get(`http://localhost:8080/api/realtors/${id}`, config)
        .then((res) => {
          setRealtor(res.data);
        })
        .catch((err) => {});
    }
  }, [listing.realtor]);

  const displayInteriorImages = () => {
    let images = [];

    images.push(
      <div key={1} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_1}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_2 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_2}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_3 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_3}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={2} className="row">
        <div className="col-1-of-3">
          {listing.photo_4 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_4}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_5 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_5}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_6 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_6}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={3} className="row">
        <div className="col-1-of-3">
          {listing.photo_7 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_7}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_8 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_8}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_9 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_9}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={4} className="row">
        <div className="col-1-of-3">
          {listing.photo_10 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_10}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_11 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_11}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_12 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_12}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={5} className="row">
        <div className="col-1-of-3">
          {listing.photo_13 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_13}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_14 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_14}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_15 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_15}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={6} className="row">
        <div className="col-1-of-3">
          {listing.photo_16 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_16}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_17 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_17}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_18 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_18}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={7} className="row">
        <div className="col-1-of-3">
          {listing.photo_19 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_19}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_20 ? (
            <div className="listingdetail_display">
              <img
                className="listingdetail_display_image"
                src={listing.photo_20}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3"></div>
      </div>
    );
    return images;
  };

  return (
    <div className="listingdetail">
      <Helmet>
        <title>Real Estate - Listing | {`${listing.title}`}</title>
        <meta name="description" content="Listing Detail" />
      </Helmet>
      <div className="listingdetail_header">
        <h1 className="listingdetail_title">{listing.title}</h1>
        <p className="listingdetail_location">
          {listing.city} {listing.state}, {listing.zipcode}
        </p>
      </div>
      <div className="row">
        <div className="listingdetail_breadcrumb">
          <Link className="listingdetail_breadcrumb_link" to="/">
            Home
          </Link>{" "}
          / {listing.title}
        </div>
      </div>
      <div className="row">
        <div className="col-3-of-4">
          <div className="listingdetail_display">
            <img
              className="listingdetail_display_image"
              src={listing.photo_main}
              alt=""
            />
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="listingdetail_display">
            <img
              className="listingdetail_display_image"
              src={realtor.photo}
              alt=""
            />
          </div>
          <h3 className="listingdetail_realtor">{realtor.name}</h3>
          <p className="listingdetail_contact">{realtor.phone}</p>
          <p className="listingdetail_contact">{realtor.email}</p>
          <p className="listingdetail_about">{realtor.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ul className="listingdetail_list">
            <li className="listingdetail_list_item">
              Home Type: {listing.home_type}
            </li>
            <li className="listingdetail_list_item">Price: ${listing.price}</li>
            <li className="listingdetail_list_item">
              Bedrooms: {listing.bedrooms}
            </li>
            <li className="listingdetail_list_item">
              Bathrooms: {listing.bathrooms}
            </li>
            <li className="listingdetail_list_item">
              Square Feet: {listing.sqft}
            </li>
          </ul>
        </div>
        <div className="col-1-of-2">
          <ul className="listingdetail_list">
            <li className="listingdetail_list_item">
              Sale Type: {listing.sale_type}
            </li>
            <li className="listingdetail_list_item">
              Address: {listing.address}
            </li>
            <li className="listingdetail_list_item">City: {listing.city}</li>
            <li className="listingdetail_list_item">State: {listing.state}</li>
            <li className="listingdetail_list_item">
              Zip Code: {listing.zipcode}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <p className="listingdetail_description">{listing.description}</p>
      </div>
      {displayInteriorImages()}
    </div>
  );
};

export default ListingDetail;
