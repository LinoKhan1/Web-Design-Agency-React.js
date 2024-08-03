import React from "react";
import { Link } from "react-router-dom";

// React Helmet
import { Helmet } from 'react-helmet';

// Style and CSS
import './Blog.scss';
import '../Home/Home.scss';

// AOS Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images

import BlogImage from '../../assets/images/Image.webp';


// Component 
import Footer from '../../components/layout/Footer';
const Blogs = () =>{

    return(
        <div className="blog-content">

            <div className="main">
                {/** Hero Section */}
                <div className="hero">
                    <section className="section">
                        <div className="hero-text">
                            <h1 className="dispaly-1">Blog</h1>
                        </div>
                    </section>
                </div>

                {/** Top Articles Section */}
                <div className="top-articles resources">
                    <div className="section">
                        <div className="row">
                            <div className="title">
                                <h1>Top Articles</h1>
                            </div>
                            <div className="col">
                                <div className="blog">
                                    <img className="img-fluid" src={BlogImage} alt="SEO Blog" />
                                    <div className="blog-preview">
                                        <h2>
                                        Best Practices for SEO: Boosting Your Website Visibility
                                        </h2>
                                        <Link to="/">Read on</Link>
                                    </div>
                                </div>
                            </div>   
                            <div className="col">
                                <div className="blog">
                                    <img className="img-fluid" src={BlogImage} alt="SEO Blog" />
                                    <div className="blog-preview">
                                        <h2>
                                        Best Practices for SEO: Boosting Your Website Visibility
                                        </h2>
                                        <Link to="/">Read on</Link>
                                    </div>
                                </div>
                            </div>   
                            <div className="col">
                                <div className="blog">
                                    <img className="img-fluid" src={BlogImage} alt="SEO Blog" />
                                    <div className="blog-preview">
                                        <h2>
                                        Best Practices for SEO: Boosting Your Website Visibility
                                        </h2>
                                        <Link to="/">Read on</Link>
                                    </div>
                                </div>
                            </div>               
                        </div>        
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    );
}

export default Blogs;