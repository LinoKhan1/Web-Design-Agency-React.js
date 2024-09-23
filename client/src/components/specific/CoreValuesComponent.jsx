// CoreValuesComponent.jsx
import React from 'react';

const CoreValuesComponent = () => {
  const coreValues = [
    {
      icon: "fa-solid fa-pen-ruler",
      title: "Integrity",
      description: "We prioritize transparency and honesty in everything we do, ensuring every project is built on trust and clear communication.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "Innovation",
      description: "Our team constantly pushes the boundaries of web design and development, creating cutting-edge solutions tailored to your needs.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Collaboration",
      description: "We work closely with you to bring your vision to life, ensuring that every solution reflects your brand’s values and goals.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Results-Driven",
      description: "Our focus is on delivering measurable results that help your business grow, with a commitment to continuous improvement.",
    },
  ];

  return (
    <div className="core-values-section">
      <section className="section">
        <div className="title">
          <h1 className="display-1">Built on Innovation and Collaboration</h1>
          <p>We believe in a client-first approach, combining creativity and technology to craft solutions that meet your business goals.</p>
        </div>
        <div className="row">
          {coreValues.map((value, index) => (
            <div key={index} className="col-lg-5">
              <i className={value.icon}></i>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoreValuesComponent;
