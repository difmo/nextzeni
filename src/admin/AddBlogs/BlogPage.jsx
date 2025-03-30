import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogDoc = await getDoc(doc(db, "blogs", blogId));
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        setError("Error fetching blog: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [blogId]);

  if (loading) {
    return (
      <div>
        {/* <MainLoader /> */}
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container h-screen  max-w-5xl mx-auto text-black pt-9 ">
      <h1 className="mb-6 text-3xl font-semibold text-primary">{blog.title}</h1>
      <div
        className="  p-8 rounded border-primary/40 mb-6 content-container "
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

 {/* dfd dfds*/}
      {/* <div className="flex">
        <span className="ml-auto">
          --{blog.bloggerName ? blog.bloggerName : "UnKnown"}
        </span>
      </div> */}
    </div>
  );
};

export default BlogPage;
