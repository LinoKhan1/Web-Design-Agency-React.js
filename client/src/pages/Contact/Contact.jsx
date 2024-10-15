// React
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Images
import Logo from '../../assets/images/Logo-white.webp';

// Styles & CSS
import './contact.scss';
const Contact = () => {
    return (
        /* Contact Page */
        <div className="Contact-content">
            <Helmet>
                <title>Contact Us | Linokhan - Get in Touch for Web Development Services</title>
                <meta name="description" content="Reach out to Linokhan, your trusted web development agency. Contact us for inquiries about web design, custom application development, and user experience optimization. We're here to help you achieve your digital goals." />
                <meta name="keywords" content="contact Linokhan, web development inquiries, custom web application development, user experience optimization, web design, web development agency" />
            </Helmet>
            <div className="main">

                {/** Contact Options */}
                <div className="options">
                    <div className="section">

                        <Link className="link" to="/">
                            <h1>LinoKhan</h1>

                        </Link>
                        <h1 className="display-1">
                            Contact us
                        </h1>
                        <p>
                            To help us connect you with the right person, please tell us what describes you best:
                        </p>
                        <Link to="/get-proposal"> <button>
                            I’m interested in hiring linokhan.com for a project
                        </button></Link>
                        <Link to="/apply-job">
                            <button>
                                I’m interested in applying for a job a linokhan.com
                            </button>
                        </Link>
                        <Link to="/sell-product">
                            <button>
                                I’m interested in selling a product to linokhan.com
                            </button>
                        </Link>

                        <Link to="/previous-client">
                            <button>
                                I’m an existing client or past client of linokhan.com
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Structured Data */}
            <script type="application/ld+json">
                {`
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Linokhan",
                "url": "https://www.linokhan.com",
                "logo": "https://www.linokhan.com/assets/images/Logo-white.webp",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1234567890",
                    "contactType": "customer service"
                }
            }
            `}
            </script>
        </div>
    )
};

export default Contact;