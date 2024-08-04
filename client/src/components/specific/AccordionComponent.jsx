import React, { useState } from 'react';
//import PropTypes from 'prop-types';

/* Style and css*/

const AccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { id: 0, question: 'What types of clients and industries do you serve?', answer: 'We partner with clients of all shapes and sizes - from startups and small businesses to large enterprises and nonprofits. Our expertise spans various sectors including Technology, Financial Services, Professional Services, Healthcare, Real Estate, and E-commerce. We tailor our solutions to meet the unique needs of each client, regardless of their size or industry.' },
    { id: 1, question: 'Which platforms do you use for web design and development?', answer: 'Our web design and development stack includes a variety of powerful platforms and technologies to meet diverse client needs. We utilize ReactJS for dynamic and responsive front-end development, ASP.NET with C# for robust and scalable web applications, and Java Spring Web for enterprise-level backend solutions. For content management systems (CMS), we leverage popular platforms such as WordPress and WebFlow to create flexible and easy-to-manage websites.' },
    {
      id: 2,
      question: "How will you improve our SEO presence?",
      answer: "<ul>"
        + " <li><strong>On-Page Optimization:</strong> We optimize key elements of your website, such as title tags, meta descriptions, header tags, and image alt texts, ensuring they are relevant and keyword-rich. We also ensure your content is high-quality, informative, and regularly updated to meet the needs of your audience and search engines.</li>"
        + "<li><strong>Technical SEO:</strong> We conduct thorough technical audits to identify and fix issues like broken links, slow page load speeds, and poor mobile usability. We ensure your website is structured properly for easy crawling and indexing by search engines.</li>"
        + "<li><strong>Content Strategy:</strong> We develop a content strategy that focuses on creating valuable and engaging content tailored to your target audience. This includes blog posts, articles, infographics, and other forms of content that can attract and retain visitors.</li>"
        + "<li><strong>Backlink Building:</strong> We build a network of high-quality backlinks from reputable and relevant websites to enhance your site authority and credibility in the eyes of search engines.</li>"
        + "<li><strong>Local SEO:</strong> For businesses targeting local markets, we optimize your online presence to improve visibility in local search results. This includes setting up and optimizing your Google My Business profile, managing local citations, and encouraging customer reviews.</li>"
        + "<li><strong>Analytics and Reporting:</strong> We use tools like Google Analytics and Google Search Console to monitor your site performance, track key metrics, and provide detailed reports. This allows us to continuously refine our strategies and ensure we are meeting your SEO goals.</li> </ul>"
    },
    {
      id: 3,
      question: "What types of problems do you solve?",
      answer: "As a web design/development and brand agency, we specialize in solving a wide range of problems for our clients, including:"
        + "<ul>"
        + "<li><strong>Outdated or Ineffective Websites:</strong> We help clients modernize their online presence by designing and developing websites that are visually appealing, user-friendly, and optimized for performance and conversions.</li>"
        + "<li><strong>Low Brand Visibility:</strong> We improve brand visibility and awareness by creating cohesive brand identities, developing impactful branding materials, and implementing effective marketing strategies across various channels.</li>"
        + "<li><strong>Lack of Online Presence:</strong> We assist clients in establishing a strong online presence through website development, search engine optimization (SEO), social media integration, and other digital marketing initiatives.</li>"
        + "<li><strong>Poor Conversion Rates:</strong> We optimize websites and user experiences to enhance conversion rates and drive meaningful actions, such as lead generation, sales, and customer engagement.</li>"
        + "<li><strong>Brand Identity Consistency:</strong> We ensure consistency across all brand touchpoints, including websites, social media, marketing materials, and more, to reinforce brand identity and foster trust and recognition among target audiences.</li>"
        + "</ul>"
    },
    { id: 4, question: 'What are the benefits of using a responsive web design approach?', answer: 'Benefits of responsive web design include improved user experience across devices, better SEO performance (due to Google\'s preference for mobile-friendly websites), easier maintenance (as you only need to update content once), and cost-effectiveness (compared to maintaining separate mobile and desktop versions).' },
  ];

  return (
    <div id="accordion" className="accordion-container">
      {accordionData.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h3 className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={activeIndex === item.id}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
              <span className="accordion-arrow">{activeIndex === item.id ? '▼' : '▶'}</span>
            </button>
          </h3>
          {activeIndex === item.id && (
            <div
              id={`collapse${item.id}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordion"
            >
              <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
/*AccordionComponent.propTypes = {
  // Define prop types if necessary
};*/
export default AccordionComponent;
