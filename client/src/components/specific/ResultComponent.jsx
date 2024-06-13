/* React */
import React, { useRef, useEffect } from 'react';

/* AOS Animations */
import AOS from "aos";
import 'aos/dist/aos.css';

/* Style and CSS*/
import './component.scss';

const ResultComponent = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        /* Result Component */
        <div className="scroller-container" data-aos="fade-up">
            <div className="scroller-header">
                <h1>Our Proven Results</h1>
                <div className="scroller-buttons">
                    <button className="scroll-button" onClick={scrollLeft}>‹</button>
                    <button className="scroll-button" onClick={scrollRight}>›</button>
                </div>
            </div>
            <div className="scroll-wrapper row" ref={scrollContainer}>
                <div className="scroller-row">
                    <div className="scroller-column">
                        <h1>75%</h1>
                        <p>ROI</p>
                        <p>We ensure our clients achieve maximum returns from their digital investments.</p>
                    </div>
                    <div className="scroller-column col">
                        <h1>30%</h1>
                        <p>CRO</p>
                        <p>Our SEO strategies drive higher visibility and attract more organic traffic to client websites.</p>
                    </div>
                    <div className="scroller-column col">
                        <h1>50%</h1>
                        <p>Brand Visibility Growth</p>
                        <p>We elevate our clients online presence and strengthen their brand identity to reach a wider audience.</p>
                    </div>
                    <div className="scroller-column col">
                        <h1>30%</h1>
                        <p>SEO</p>
                        <p>Our effective SEO strategies increase visibility and attract more organic traffic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultComponent;
