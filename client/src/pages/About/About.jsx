/* React */
import React, { useEffect } from "react";

/* React Helmet */
import { Helmet } from "react-helmet";

/* Routing */
import { Link } from "react-router-dom";

/* Components */
import Footer from "../../components/layout/Footer.jsx";
import DifferentiatorComponent from "../../components/specific/DifferentiatorComponent.jsx";
import CoreValuesComponent from "../../components/specific/CoreValuesComponent.jsx";

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

/* Styles and CSS */
import '../About/about.scss';

/* About Page Component */
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-content">
      <Helmet>
        <title>About Us | Linokhan - Leading Web Development Agency</title>
        <meta name="description" content="Learn more about Linokhan, a leading web development agency specializing in web design, custom web application development, and user experience optimization. Our team is dedicated to providing top-notch web development services to help businesses thrive online." />
        <meta name="keywords" content="web development agency, web design, custom web application development, user experience optimization, website marketing company, Linokhan, about Linokhan" />
      </Helmet>
      {/* Hero Section */}
      <div className="hero">
        <section className="section">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-text">
                <h1>About Linokhan</h1>
                <p>Linokhan.com is a dynamic web design and development agency located in the vibrant city of Cape Town, South Africa. Established in 2023, our agency has quickly emerged as a trusted partner for businesses seeking to establish a formidable online presence and drive tangible returns on their digital investments.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="about-section" data-aos="fade-up">
        <section className="section">
          <div className="row">
            <div className="col-lg-5">
              <h1>Web Design and Development</h1>
            </div>
            <div className="col-lg-6">
              <h2>Linokhan.com is a Full-Service Web Development and Brand Design Agency.</h2>
              <p>We are a dedicated team offering a comprehensive approach to brand strategy, web design, development, and SEO. Our team chooses to work with brands that excite and inspire. Together, we are working to grow forward-thinking, relevant brands.</p>
              <p>Our mission at Linokhan.com is clear: to empower our clients by establishing their online presence and solving their problems through innovative marketing and design services, ultimately generating a measurable return on investment.</p>
              <Link to="/get-proposal">
                <button>Get a Proposal</button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Core Values Section */}
      <CoreValuesComponent />

      {/* Differentiator Section */}
      <DifferentiatorComponent />

      {/* Resources Section */}
      <div className="resources-section" data-aos="fade-up">
        <section className="section">
          <div className="row">
            <div className="col-lg-5">
              <p>_Resources</p>
            </div>
            <div className="col-lg-6">
              <h1>Best Practices for SEO: Boosting Your Website</h1>
              <p>In the digital age, having a strong online presence is essential for any business or individual looking to reach a wider audience. Search Engine Optimization (SEO) plays a crucial role in enhancing your website visibility and attracting organic traffic.</p>
              <Link to="/blog">
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section*/}
      <Footer />
      {/** Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Linokhan",
            "url": "https://www.linokhan.com",
            "logo": "https://www.linokhan.com/logo.png",
            "description": "Linokhan is a leading web development agency specializing in web design, custom web application development, and user experience optimization.",
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
