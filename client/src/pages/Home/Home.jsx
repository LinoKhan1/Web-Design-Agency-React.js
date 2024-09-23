// React
import React, { useEffect, useState } from "react";
// React Lazy Load
import LazyLoad from "react-lazyload";
// React Helmet
import { Helmet } from "react-helmet";

// React Routing
import { Link } from "react-router-dom";

// Styles and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Home.scss';

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRocket } from "@fortawesome/free-solid-svg-icons";

// Components
import AccordionComponent from "../../components/specific/AccordionComponent.jsx";
import Footer from "../../components/layout/Footer.jsx";
import ServiceComponent from "../../components/specific/ServiceComponent.jsx";
import AuthorInfoComponent from "../../components/specific/AuthorInfoComponent.jsx";
import ResultComponent from "../../components/specific/ResultComponent.jsx";
import Posts from "../../components/specific/Posts.jsx";
// Images
import Profile_img_2 from '../../assets/images/testimonial_img2.webp';
import Profile_img_3 from '../../assets/images/testimonial_img3.webp';
import Profile_img_4 from '../../assets/images/testimonial_img4.webp';


/* Home Page Component */
// Utility function to extract the first sentence
const getFirstSentence = (text) => {
  const match = text.match(/[^\.!\?]+[\.!\?]+/g);
  return match ? match[0] : text;
};



const Home = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  
  return (

    <div className="home-content">
      <Helmet>
        <title>Home | Linokhan - Web Design and Development Services</title>
        <meta name="description" content="Professional web design services that drive revenue. Get a stunning website with our expert development, SEO, and branding solutions. Contact Linokhan today!" />
        <meta name="keywords" content="web development, web design, website development, web application, marketing website, brand design, user experience, user interface, responsive design, SEO" />
      </Helmet>
      <div className="main">
        {/* Hero Section */}
        <div className="hero">
          <div className="section">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">
                  <h1 className="display-1">
                    Empowering Your Digital Success.
                  </h1>
                  <p>Innovative web development and design solutions for businesses of all sizes.</p>

                  <span>
                    <Link to="/get-proposal">
                      <button className="btn-primary">
                        <FontAwesomeIcon className="rocket" icon={faRocket} /> Get a proposal
                      </button>
                    </Link>
                    <button onClick={() => document.getElementById('service').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                      View services
                    </button>
                  </span>
                </div>
                <div className="hero-testimonial">
                  <span className="rating">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                  </span>
                  <p>Our new site has a 60% higher conversion rate than our old one. I highly recommend their services.</p>
                  <AuthorInfoComponent name="Olena Kovalenko" imageSrc={Profile_img_2} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonial" >
          <div className="section">
            <div className="row">
              {[
                {
                  name: "Olena Kovalenko",
                  text: "Our new site has a 60% higher conversion rate than our old one. I highly recommend their services.",
                  image: Profile_img_2
                },
                {
                  name: "Andriy Petrov",
                  text: "I cannot speak highly enough of the team at linokhan. Their expertise in web design and development is unmatched.",
                  image: Profile_img_3
                },
                {
                  name: "Antoine Dubois",
                  text: "Leur équipe a su comprendre nos besoins et a créé un site web qui correspond parfaitement à notre image de marque.",
                  image: Profile_img_4
                }
              ].map((testimonial, index) => (
                <div className="col" key={index}>
                  <span>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon className="star" icon={faStar} key={i} />
                    ))}
                  </span>
                  <p>{testimonial.text}</p>
                  <AuthorInfoComponent name={testimonial.name} imageSrc={testimonial.image} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <ServiceComponent />

        {/* Results Section */}
        <ResultComponent />

        {/* Resources Section */}
        <div className="resources">
          <div className="section">
            <div className="title">
              <h1 className="display-1">Discover Our Latest Insights</h1>
            </div>
            <Posts apiUrl={apiUrl} />


          </div>
        </div>


        {/* Questions Section */}
        <div className="questions">
          <div className="section">
            <div className="row">
              <div className="title">
                <h1 className="text-center display-1">Frequently asked questions</h1>
              </div>
              <AccordionComponent />
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div >
  );
};

export default Home;