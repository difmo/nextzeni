import React, { useEffect, useState } from "react";
import {
  useParams
} from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

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

  // Add tooltip behavior to links inside blog content
useEffect(() => {
  const contentContainer = document.querySelector(".content-container");
  if (!contentContainer) return;

  const links = contentContainer.querySelectorAll("a");

  links.forEach((link) => {
    // Skip if tooltip already exists
    if (link.closest(".tooltip-wrapper")) return;

    // Add tailwind classes for link styling
    link.classList.add("text-blue-600", "hover:text-red-600");

    // Create tooltip preview text
    let tooltipText = link.getAttribute("title")?.trim();
    if (!tooltipText || tooltipText.length < 3) {
      tooltipText = link.textContent.trim();
    }

    tooltipText = tooltipText.length > 50 ? tooltipText.slice(0, 50) + "..." : tooltipText;

    // Create the tooltip element
    const tooltip = document.createElement("div");
    tooltip.textContent = tooltipText;
    tooltip.className =
      "tooltip-box absolute z-10 bg-white border border-gray-300 text-gray-800 p-2 rounded shadow text-sm hidden group-hover:block";
    tooltip.style.top = "100%";
    tooltip.style.left = "0";
    tooltip.style.minWidth = "200px";
    tooltip.style.maxWidth = "300px";

    // Wrap the link and tooltip inside a span
    const wrapper = document.createElement("span");
    wrapper.className = "tooltip-wrapper group relative inline-block";

    link.parentNode.insertBefore(wrapper, link);
    wrapper.appendChild(link);
    wrapper.appendChild(tooltip);
  });
}, [blog]);


  if (loading) return <div>{/* <MainLoader /> */}</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container max-w-5xl mx-auto text-black pt-9">
      <h1 className="px-4 text-3xl font-semibold text-primary">{blog.title}</h1>
      <div
        className="p-4 content-container prose"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogPage;
