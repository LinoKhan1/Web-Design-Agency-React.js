/* React */
import React, { useState, useRef } from "react";

/* React Helmet */
import { Helmet } from "react-helmet";

/* React Routing */
import { Link } from "react-router-dom";

/* Images */
import Logo from '../../assets/images/Logo-white.webp';

/* Lazy load React */
import LazyLoad from "react-lazyload";

/* Styles and CSS */
import './contact.scss';

/* Email JS */
import emailjs from '@emailjs/browser';

const Proposal = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_725gn2g', 'template_gkzkq4u', form.current, 'kLCfazak-ocrHLbKy')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                alert("Your message has been sent!")
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        /* Get Proposal Page */
        <div className="Contact-content">
            <Helmet>
                <title>Get a Proposal | Linokhan - Web Design & Development Agency</title>
                <meta name="description" content="Submit your project details and get a tailored proposal for web design, development, SEO, branding, and digital strategy services." />
                <meta name="keywords" content="web design proposal, web development proposal, SEO proposal, branding proposal, digital strategy proposal" />
            </Helmet>
            <div className="main contact-form">
                <div className="options">
                    <div className="section">
                        <Link to="/"> <LazyLoad height={200}>
                            <img src={Logo} alt="Logo of Linokhan" />
                        </LazyLoad></Link>
                        <h1 className="display-1">Get a proposal</h1>
                        <p>
                            We will be in touch to book a discovery call shortly after you submit the form below 😃.
                        </p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="user_name">First name</label>
                                    <input type="text" id="user_name" name="user_name" placeholder="John" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Smith" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="user_email">Email address</label>
                                    <input type="email" id="user_email" name="user_email" placeholder="johnsmith@gmail.com" />

                                </div>
                                <div className="col">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="text" id="phone" name="phone" placeholder="+27765905100" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="company">Company name</label>
                                    <input type="text" id="company" name="company" placeholder="Helix Consulting LLC" />

                                </div>
                                <div className="col">
                                    <label htmlFor="website">Website url (if applicable)</label>
                                    <input type="text" id="website" name="website" placeholder="helixconsulting.com" />
                                </div>

                            </div>
                            <div className="row">
                               
                                <p>Project Summary</p>
                                <p>Please provide a summary of your project, detailing how we can assist your business. Include any specific areas where you need support, such as development, implementation, or other services.</p>
                                <textarea name="message" id="message" placeholder="i.e. page count, functionality, design preferences, timeline, etc..."></textarea>
                                <input type="submit" value="Submit request" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proposal;
