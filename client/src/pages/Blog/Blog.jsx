// React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// React Helmet
import { Helmet } from 'react-helmet';

// Style and CSS
import './Blog.scss';
import '../Home/Home.scss';

// AOS Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component 
import Footer from '../../components/layout/Footer';

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { id } = useParams();
  const [post, setPost] = useState(null);

  // Use environment variable for API URL
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // This method fetches the post from the database
  useEffect(() => {
    async function getPostById() {
      try {
        const response = await fetch(`${apiUrl}/post/${id}`);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }
        const post = await response.json();
        setPost(post);
      } catch (error) {
        console.error("Error fetching the post:", error);
      }
    }
    getPostById();
  }, [id, apiUrl]);

  return (
    <div className="blog-content">
      <Helmet>
        <title>Blog | Linokhan - Insights on Web Design, Development, and SEO</title>
        <meta
          name="description"
          content="Explore Linokhan's blog for the latest insights and tips on web design, development, branding, SEO, and digital strategy. Stay informed with our expert articles and updates."
        />
        <meta
          name="keywords"
          content="Linokhan blog, web design insights, web development tips, SEO strategies, branding articles, digital strategy, web design trends 2024"
        />
      </Helmet>
      <div className="main">
        {post ? (
          <div>
            <div className="hero">
              <section className="section">
                <div className="hero-text">
                  <h1>
                    <div dangerouslySetInnerHTML={{ __html: post.title }} />
                  </h1>
                </div>
              </section>
            </div>
            <div className="article">
              <section className="section">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </section>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
