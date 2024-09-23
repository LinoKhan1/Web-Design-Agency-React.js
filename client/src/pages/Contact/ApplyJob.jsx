// React
import React from "react";

// React Lazy Load
import LazyLoad from "react-lazyload";

// React Helmet
import { Helmet } from "react-helmet";

// React Routing
import { Link } from "react-router-dom";

// Images
import Logo from '../../assets/images/Logo-white.webp';

// Styles and CSS
import './contact.scss';

/* Apply Page Component */
const Apply = () => {
    return (
        /* Apply Job Page */
        <div className="Contact-content">
            <Helmet>
                <title>Job Application | Linokhan - Web Design & Development Agency</title>
                <meta name="description" content="Currently, we are not hiring. Please check back later or follow us on Indeed and LinkedIn for job postings." />
                <meta name="keywords" content="job application, hiring, careers, job opportunities, Linokhan, digital agency" />
            </Helmet>
            <div className="main">
                {/** Options Section */}
                <div className="options">
                    <div className="section">
                        <Link className="link" to="/">
                        <h1>LinoKhan</h1>

                        </Link>
                        <h1 className="display-1">
                            Job Application
                        </h1>
                        <p>We are not hiring at this time, and we apologize for the inconvenience. We will post jobs on Indeed and/or LinkedIn when we are hiring.
                        </p>
                        <Link to="/"><button>Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Apply;