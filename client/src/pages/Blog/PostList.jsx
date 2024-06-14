import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <Link to={`/post/${props.post._id}`}>
        {props.post.title}
      </Link>
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.post.content}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {props.post.author}
    </td>
    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
          to={`/edit/${props.post._id}`}
        >
          Edit
        </Link>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3"
          color="red"
          type="button"
          onClick={() => {
            props.deletePost(props.post._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
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
    return;
  }, [posts.length]);

  // This method will delete a post
  async function deletePost(id) {
    await fetch(`http://localhost:5050/post/${id}`, {
      method: "DELETE",
    });
    const newPosts = posts.filter((el) => el._id !== id);
    setPosts(newPosts);
  }

  // This method will map out the posts on the table
  function postList() {
    return posts.map((post) => {
      return (
        <Post
          post={post}
          deletePost={() => deletePost(post._id)}
          key={post._id}
        />
      );
    });
  }

  // This following section will display the table with the posts of individuals.
  return (
    <>
      <h3 className="text-lg font-semibold p-4">Blog Posts</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&amp;_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Title
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Content
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Author
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              {postList()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}