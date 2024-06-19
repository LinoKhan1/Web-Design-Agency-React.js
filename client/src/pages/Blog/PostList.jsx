/* React */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style and CSS
import './Blog.scss';
import '../Home/Home.scss';

/* Components */
import Footer from "../../components/layout/Footer";

/* Images */

// Utility function to extract the first sentence
const getFirstSentence = (text) => {
  const match = text.match(/[^\.!\?]+[\.!\?]+/g);
  return match ? match[0] : text;
};

const Post = (props) => (
  <div className="col-md-6 mb-4">
    <div className="post-item">

      <div className="post-title">
        <Link to={`/post/${props.post._id}`} className="blog-title">
          <h2>
            <div dangerouslySetInnerHTML={{ __html: props.post.title }} />

          </h2>
        </Link>
      </div>
      <div className="post-content mb-2">
        <p>
          <div dangerouslySetInnerHTML={{ __html: getFirstSentence(props.post.content) }} />
        </p>
      </div>
      <div className="post-author text-muted mb-2">
        <p>
          <em>by {props.post.author}</em>
        </p>
      </div>
      <div className="post-read-more">
        <Link to={`/post/${props.post._id}`}>
          Read more
        </Link>
      </div>
    </div>
  </div>
);

export default function PostList() {
  const [posts, setPosts] = useState([]);

  // This method fetches the posts from the database.
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`http://localhost:5050/post/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const posts = await response.json();
      setPosts(posts);
    }
    getPosts();
  }, []);

  // This method will map out the posts in a div layout
  function postList() {
    return posts.map((post) => {
      return (
        <Post
          post={post}
          key={post._id}
        />
      );
    });
  }

  // This following section will display the posts in a div layout.
  return (
    <>
      <div className="blog-content">
        <div className="main">
          {/** Hero Section */}
          <div className="hero">
            <div className="section">
              <div className="hero-text">
                <h1 className="display-1">
                  Perspectives on digital and web
                </h1>
              </div>
            </div>
          </div>
          {/** Posts Section */}
          <div className="posts">
            <div className="section">
              
              <div className="row">
                {postList()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
