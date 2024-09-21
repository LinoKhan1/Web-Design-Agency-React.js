import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const id = params.id?.toString() || undefined;
      if (!id) return;
      setIsNew(false);

      const response = await fetch(`${apiUrl}/post/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }

      const post = await response.json();
      if (!post) {
        console.warn(`Post with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(post);
    }
    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const post = { ...form };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      let response;
      if (isNew) {
        response = await fetch(`${apiUrl}/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
      } else {
        response = await fetch(`${apiUrl}/post/${params.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occurred with your fetch operation: ", error);
    } finally {
      setForm({ title: "", content: "", author: "" });
      navigate("/");
    }
  }

  return (
    <>
      <h3 className="text-lg font-semibold p-4">Create/Update Blog Post</h3>
      <form onSubmit={onSubmit} className="border rounded-lg overflow-hidden p-4">
        {/* Form fields */}
      </form>
    </>
  );
}
