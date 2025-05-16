import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const EditBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    content: "",
    image: "",
    updatedAt: null,
  });
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogDoc = await getDoc(doc(db, "blogs", blogId));
        if (blogDoc.exists()) {
          const blogData = blogDoc.data();
          setBlog(blogData);
          setImagePreview(blogData.image || "");
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [blogId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async (file) => {
    const imageRef = ref(storage, `images/${uuidv4()}_${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        null,
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject);
        }
      );
    });
  };

  const handlePublish = async () => {
    try {
      setLoading(true);

      let imageUrl = blog.image;

      if (newImage instanceof File) {
        imageUrl = await handleImageUpload(newImage);
      }

      const updatedBlog = {
        ...blog,
        image: imageUrl,
        updatedAt: new Date(), // <-- Add timestamp
      };

      await updateDoc(doc(db, "blogs", blogId), updatedBlog);
      alert("Blog updated successfully!");
      navigate("/all-blogs");
    } catch (error) {
      console.error("Error updating blog: ", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mx-auto text-white bg-black">
      {loading ? (
        <p>Loading blog...</p>
      ) : (
        <div>
          <h1 className="mb-6 text-3xl font-semibold text-center">Edit Blog</h1>

          <div className="mb-6">
            <label className="block text-lg">Title</label>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              className="w-full p-2 mt-2 bg-black border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg">Subtitle</label>
            <input
              type="text"
              value={blog.subtitle}
              onChange={(e) => setBlog({ ...blog, subtitle: e.target.value })}
              className="w-full p-2 mt-2 bg-black border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 mt-2 bg-black border border-gray-300 rounded-lg"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Blog Preview"
                className="w-full h-48 mt-4 rounded-lg object-cover"
              />
            )}
          </div>

          <div className="mb-6">
            <label className="block text-lg">Content</label>
            <ReactQuill
              value={blog.content}
              onChange={(value) => setBlog({ ...blog, content: value })}
              className="w-full"
              modules={{
                toolbar: [
                  [{ header: "1" }, { header: "2" }, { header: "3" }, { header: "4" }],
                  ["bold", "italic", "underline"],
                  ["link", "image"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["blockquote", "code-block"],
                  ["clean"],
                ],
              }}
            />
          </div>

          {blog.updatedAt && (
            <div className="mb-4 text-sm text-gray-400">
              Last updated:{" "}
              {new Date(blog.updatedAt.seconds * 1000).toLocaleString()}
            </div>
          )}

          <button
            onClick={handlePublish}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBlog;
