/* React */
import React from "react";

/* React Helmet */
import { Helmet } from "react-helmet";

/* Images */
import Logo from '../../assets/images/Logo-white.webp';

/* React Lazy Load */
import LazyLoad from "react-lazyload";

/* Styles and CSS*/
import './contact.scss';

/* React Routing */
import { Link } from "react-router-dom";

const Sell = () => {
    return (
        /* Sell Product Page */
        <div className="Contact-content">
            <Helmet>
                <title>Sell Product | Linokhan - Web Design and Development Agency</title>
                <meta name="description" content="If you are selling backlinks, software, white label services, or anything else, we are not interested. Please do not contact us." />
            </Helmet>
            <div className="main">
                <div className="options">
                    <div className="section">
                        <Link className="link" to="/">
                            <h1>LinoKhan</h1>

                        </Link>                        
                        <h1 className="display-1">
                            Please Do not Contact
                        </h1>
                        <p>If you are selling backlinks, software, white label services, or anything else, we are not interested. Please do not contact us. If you are contacting us about an award or a high-profile press release, contact us here.

                        </p>
                        <Link to="/"><button>Back to homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Sell;