/* React */
import React, { useRef } from "react";

/* React Helmet */
import { Helmet } from "react-helmet";

/* Images */
import Logo from '../../assets/images/Logo-white.webp';

/* React Lazy Load */
import LazyLoad from "react-lazyload";

/* Style and CSS*/
import './contact.scss';

/* React Routing */
import { Link } from "react-router-dom";

/* Email JS*/
import emailjs from '@emailjs/browser';

const Client = () => {
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
            });
    }
    return (
        /* Previous Client Page */
        <div className="Contact-content">
            <Helmet>
                <title>Get In Touch | Linokhan - Web Design & Development Agency</title>
                <meta name="description" content="Contact us to get in touch with Linokhan for your web design, development, SEO, branding needs" />
                <meta name="keywords" content="contact, get in touch, web design, web development, SEO, branding, marketing website, Linokhan" />
            </Helmet>
            <div className="main contact-form">
                <div className="options">
                    <div className="section">
                        <Link className="link" to="/">
                            <h1>LinoKhan</h1>

                        </Link>
                        <h1 className="display-1">Get In Touch</h1>
                        <p>
                            Please submit the form below. We will get back to you soon 😃.

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
                                    <input type="text" id="user_company" name="user_company" placeholder="Helix Consulting LLC" />

                                </div>
                                <div className="col">
                                    <label htmlFor="webiste">Webiste url</label>
                                    <input type="text" id="website" name="webiste" placeholder="helixconsulting.com" />
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder="Type your message here..."></textarea>
                                <input type="submit" value="Submit inquiry" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Client;



