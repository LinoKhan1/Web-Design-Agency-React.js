// React
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

// Images
import DesignImage from '../../assets/images/service1.webp';
import BrandingImage from '../../assets/images/service2.webp';
import SEOImage from '../../assets/images/service3.webp';
import UXUIImage from '../../assets/images/service4.webp';

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// List of services
const services = [
  { id: 1, name: 'Custom Web Design & Development', image: DesignImage },
  { id: 2, name: 'Brand Identity & Strategy', image: BrandingImage },
  { id: 3, name: 'Search Engine Optimization (SEO)', image: SEOImage },
  { id: 4, name: 'UX/UI Design & Optimization', image: UXUIImage },
];

const ServiceComponent = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    /** Service Component */
    <section className="service-section" id="service" data-testid="service-component">
      <div className="row">
        <div className="title">
          <h1 className="display-1">Services that Drive Success!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="service-image">
            <LazyLoad height={200}>
              <img src={currentImage} alt="Service provided by Linokhan" />
            </LazyLoad>
          </div>
        </div>
        <div className="col">
          <div className="service-list" data-testid="service-list">
            <p>
              Elevate your business with our comprehensive services, designed to enhance your online presence and deliver measurable results. From tailored web design to brand identity and SEO optimization, we cover all your digital needs.
            </p>
            <ul>
              {services.map(service => (
                <li key={service.id} onMouseEnter={() => handleMouseEnter(service.image)}>
                  <span><FontAwesomeIcon className="check" icon={faCheckCircle} /></span>
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
