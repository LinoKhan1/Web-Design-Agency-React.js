import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
//import PropTypes from 'prop-types';

// Images
import DesignImage from '../../assets/images/service1.png';
import BrandingImage from '../../assets/images/service2.png';
import SEOImage from '../../assets/images/service3.png';
import UXUIImage from '../../assets/images/service4.png';

// AOS Animations
import AOS from "aos";
import 'aos/dist/aos.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const services = [

  { id: 1, name: 'Web Design and Development', image: DesignImage },
  { id: 2, name: 'Brand Design', image: BrandingImage },
  { id: 3, name: 'SEO', image: SEOImage },
  { id: 4, name: 'User Experience and Interface Optimization', image: UXUIImage },

];
const ServiceComponent = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  const [currentImage, setCurrentImage] = useState(services[0].image);

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };
  const {hash} = useLocation();
  useEffect(()=>{
    if(hash){
      const element = document.getElementById(hash.substring(1));
      if(element){
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  },[hash]);

  return (
    /** Service Component */
    <section className="service-section" id="service" data-testid="service-component" data-aos="fade-up">
      <div className="row">
        <div className="col">
          <div className="service-image">
            <LazyLoad height={200}>
              <img  src={currentImage} alt="Service of Linokhan" />
            </LazyLoad>
          </div>
        </div>
        <div className="col">
          <div className="service-list" data-testid="service-list">
            <h1>Services that drives sucess!</h1>
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
      {/* Structured Data */}
      {/*<script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Service",
          "serviceType": "${services.name}",
          "description": "${services.description}",
          "provider": {
            "@type": "Organization",
            "name": "Linokhan",
            "url": "https://www.linokhan.com"
          },
          "image": "${services.image}"
        }
        `}
      </script>*/}
    </section>
  );
};

/*ServiceComponent.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};*/

export default ServiceComponent;
