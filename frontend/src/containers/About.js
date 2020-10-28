import React, { useState, useEffect, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import House from "../assets/images/house.jpg";

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);
  const [host, setHost] = useState("");

  if (process.env.NODE_ENV === "production") {
    // Production Code
    setHost("https://nadiajali-realestate.herokuapp.com");
  } else {
    // Development Code
    setHost("http://localhost:8080");
  }

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(host + "/api/realtors/topseller"
        );
        setTopSeller(res.data);
      } catch (err) {}
    };
    getTopSeller();
  }, []);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get(host + "/api/realtors/");
        setRealtors(res.data);
      } catch (err) {}
    };
    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className="about_display">
            <img className="about_display_image" src={realtor.photo} alt="" />
          </div>
          <h3 className="about_realtor">{realtor.name}</h3>
          <p className="about_contact">{realtor.phone}</p>
          <p className="about_contact">{realtor.email}</p>
          <p className="about_about">{realtor.description}</p>
        </Fragment>
      );
    });

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{allRealtors[i]}</div>
          <div className="col-1-of-3">
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      );
    }

    return results;
  };

  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about_display">
            <img className="about_display_image" src={seller.photo} alt="" />
          </div>
          <h3 className="about_topseller">Top Seller:</h3>
          <p className="about_realtor">{seller.name}</p>
          <p className="about_contact">{seller.phone}</p>
          <p className="about_contact">{seller.email}</p>
          <p className="about_about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };

  return (
    <main className="about">
      <Helmet>
        <title>Real Estate - About</title>
        <meta name="description" content="About Us"></meta>
      </Helmet>
      <header className="about_header">
        <h1 className="about_heading">About Real Estate</h1>
      </header>
      <section className="about_info">
        <div className="row">
          <div className="col-3-of-4">
            <h2 className="about_subheading">
              We find the perfect home for you!
            </h2>
            <p className="about_paragraph">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="about_display">
              <img className="about_display_image" src={House} alt=""></img>
            </div>
            <p className="about_paragraph">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="col-1-of-4">{getTopSeller()}</div>
        </div>
      </section>
      <section className="about_team">
        <div className="row">
          <h2 className="about_subheading">Meet our awesome team!</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  );
};

export default About;
