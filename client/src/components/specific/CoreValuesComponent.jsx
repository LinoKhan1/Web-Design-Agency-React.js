// React
import React, { useEffect } from 'react';

// Styles & CSS
import './component.scss';

// Data AOS
import AOS from "aos";
import 'aos/dist/aos.css';

const coreValues = [
    { title: 'Integrity', description: 'We uphold the highest standards of integrity in all of our actions.' },
    { title: 'Customer Commitment', description: 'We develop relationships that make a positive difference in our clients’ lives.' },
    { title: 'Quality', description: 'We provide outstanding service that, together, deliver premium value to our clients.' },
    { title: 'Teamwork', description: 'We work together, across boundaries, to meet the needs of our customers and to help the company win.' },
    { title: 'Respect for People', description: 'We value our people, encourage their development and reward their performance.' },
    { title: 'Detail Oriented', description: 'Attention to detail is paramount in our approach. We meticulously plan and execute every aspect of our projects, ensuring precision and accuracy.' },
    { title: 'A Will to Win', description: 'We exhibit a strong will to win in the marketplace and in every aspect of our business.' },
    { title: 'Personal Accountability', description: 'We are personally accountable for delivering on our commitments.' }
];

const CoreValuesComponent = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        /* Core Values Component */
        <div className="core-values-section" data-aos="fade-up">
            <section className="section">
                <div className="row">
                    <div className="col title-column">
                        <h1>Core Values</h1>
                        
                    </div>
                    <div className="col values-column">
                        <div className="values-list">
                            {coreValues.map((value, index) => (
                                <div key={index} className="value-item">
                                    <div className="value-icon">
                                    <i className="fa-solid fa-pen-ruler"></i>                                    </div>
                                    <div className="value-text">
                                        <h2>{value.title}</h2>
                                        <p>{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoreValuesComponent;
