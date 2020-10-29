import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const Contact = ({ setAlert }) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers = { "Content-Type": "application/json" };

    setLoading(true);
    axios
      .post(host + "/api/contacts/", {
        name,
        email,
        subject,
        message,
      })
      .then((res) => {
        setAlert("Message Sent", "success");
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        setAlert("Error With Sending Message", "error");
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Real Estate - Contact</title>
        <meta name="description" content="Contact Us"></meta>
      </Helmet>
      <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
        <label className="contact_form_label" htmlFor="name">
          Name *
        </label>
        <input
          className="contact_form_input"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={(e) => onChange(e)}
          value={name}
          required
        ></input>
        <label className="contact_form_label" htmlFor="email">
          Email *
        </label>
        <input
          className="contact_form_input"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => onChange(e)}
          value={email}
          required
        ></input>
        <label className="contact_form_label" htmlFor="subject">
          Subject *
        </label>
        <input
          className="contact_form_input"
          name="subject"
          type="text"
          placeholder="Buying Home"
          onChange={(e) => onChange(e)}
          value={subject}
          required
        ></input>
        <label className="contact_form_label" htmlFor="message">
          Message *
        </label>
        <textarea
          className="contact_form_textarea"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={(e) => onChange(e)}
          value={message}
          required
        ></textarea>
        {loading ? (
          <div className="contact_form_loader">
            <Loader type="Oval" color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="contact_form_button" htmltype="submit">
            Send
          </button>
        )}
      </form>
    </div>
  );
};

Contact.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Contact);
