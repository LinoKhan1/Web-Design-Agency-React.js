/* React */
import React, { useEffect } from "react";
// React Lazy Load
import LazyLoad from "react-lazyload";

/* React Helmet */
import { Helmet } from "react-helmet";

/* Routing */
import { Link } from "react-router-dom";
//Images
import About_img from "../../assets/images/team1.webp";
import About_img1 from "../../assets/images/team2.webp";

/* Components */
import Footer from "../../components/layout/Footer.jsx";
import DifferentiatorComponent from "../../components/specific/DifferentiatorComponent.jsx";
import CoreValuesComponent from "../../components/specific/CoreValuesComponent.jsx";
import ResourcesComponent from "../../components/specific/ResourcesComponent.jsx";
import Posts from "../../components/specific/Posts.jsx";

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

/* Styles and CSS */
import './about.scss';

// Memorized Helmet for SEO
const SeoHelmet = React.memo(() => (
  <Helmet>
    <title>About Us | LinoKhan - Custom Web Design, SEO & Branding Agency</title>
    <meta name="description" content="Discover LinoKhan, a full-service agency specializing in custom web design, development, SEO, and branding. We help businesses grow through tailored digital solutions that drive results." />
    <meta name="keywords" content="custom web design, SEO, branding, web development agency, LinoKhan, about LinoKhan" />
  </Helmet>
));

/* About Page Component */
const About = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-content">
      <SeoHelmet />

      {/* Hero Section */}
      <div className="hero">
        <section className="section">
          <div className="row">
            <div className="col">
              <div className="hero-text">
                <h1 className="">Let Us Elevate Your Brand</h1>
                <p>At LinoKhan, we craft innovative web design, development, and SEO solutions that position your business for digital success.</p>
                <span>
                  <button className="btn-primary">
                    <Link className="link" to="/get-proposal">
                      Get a Proposal
                    </Link>
                  </button>
                  <button className="btn-secondary">
                    <Link className="link" to="/#service">
                      View Services
                    </Link>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="about-section" >
        <section className="section">
          <div className="row">
            <div className="title">
              <h1 className="display-1">Your Digital Partner for Growth</h1>
            </div>
            <div className="col-lg-5">
              <h2>LinoKhan: A Full-Service Web Design & Development Agency</h2>
              <p>We specialize in creating unique digital experiences that resonate with your target audience. From custom web development to strategic SEO and branding, we help you build a digital presence that drives results.</p>
              <Link to="/get-proposal">
                <button>Get a Proposal</button>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row image-row">
                <LazyLoad height={200}>
                  <div className="col larger-image">
                    <img className="img-fluid" src={About_img} alt="Team working on digital projects" />
                  </div>
                </LazyLoad>
                <LazyLoad height={200}>
                  <div className="col smaller-image">
                    <img className="img-fluid" src={About_img1} alt="Creative team brainstorming" />
                  </div>
                </LazyLoad>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Core Values Section */}
      <CoreValuesComponent />

      {/* Differentiator Section */}
      <DifferentiatorComponent />

      {/* Resources Section */}
      <div className="resources">
        <section className="section">
          <div className="title">
            <h1>Expert Insights on Web Design and SEO</h1>
          </div>
          <Posts apiUrl={apiUrl} />
        </section>
      </div>


      {/* Footer Section */}
      <Footer />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "LinoKhan",
            "url": "https://www.linokhan.com",
            "logo": "https://www.linokhan.com/logo.png",
            "description": "LinoKhan is a custom web design, development, SEO, and branding agency helping businesses grow their digital presence.",
            "sameAs": [
              "https://www.instagram.com/linokhan_com/",
              "https://www.linkedin.com/company/93390939/"
            ]
          }
        `}
      </script>
    </div>
  );
};
export default About;
