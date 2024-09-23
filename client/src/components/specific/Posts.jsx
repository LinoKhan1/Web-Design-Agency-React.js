// PostList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

// Import images
import BlogImage1 from '../../assets/images/Blog_image1.png';
import BlogImage2 from '../../assets/images/Blog_image2.png';
import BlogImage3 from '../../assets/images/Blog_image3.png';

// Array of blog images
const blogImages = [
  BlogImage1,
  BlogImage2,
  BlogImage3,
];

const Posts = ({ apiUrl }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${apiUrl}/post`);
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [apiUrl]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
        <div className="row">
          {posts.map((post, index) => (
            <div className="col" key={post._id}>
              <div className="blog">
                <div className="img">
                  <LazyLoad height={200}>
                    <img className="img-fluid" src={blogImages[index % blogImages.length]} alt="Blog" />
                  </LazyLoad>
                </div>
                <div className="blog-preview">
                  <Link to={`/post/${post._id}`} className="blog-title">
                    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
                  </Link>
                  <Link to={`/post/${post._id}`}>Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
   
  );
};

export default Posts;
