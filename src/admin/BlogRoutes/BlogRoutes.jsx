import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Addblogs from "../AddBlogs/Addblogs";
import AllBlogs from "../AddBlogs/AllBlogs";
import EditBlog from "../AddBlogs/EditBlog";
import BlogPage from "../AddBlogs/BlogPage";
import ShowBlogs from "../AddBlogs/ShowBlogs";
import { auth, db } from "../../firebase"; // Make sure to import your firebase setup
import { collection, query, where, getDocs } from "firebase/firestore";

const BlogRoutes = () => {  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(null);
  const [blogPermission, setBlogPermission] = useState(false);
  const [userUid, setUserUid] = useState(null);
  const [bloggerName, setBloggerName] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          setIsUserLogin(user);
          fetchUserRole(user.uid);
          setUserUid(user.uid);
        } else {
          console.log("Email is not verified yet");
        }
      } else {
        setIsAdmin(false);
        setIsUserLogin(false);
        console.log("User is not logged in yet");
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserRole = async (uid) => {
    try {
      const userQuery = query(collection(db, "users"), where("uid", "==", uid));
      const querySnapshot = await getDocs(userQuery);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.isCreatePermission) {
            setBlogPermission(true);
          }
          if (userData.name) {
            setBloggerName(userData.name);
            console.log(userData.name);
          }
          if (userData.whoIs === "isAdmin") {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        });
      } else {
        console.log("No user found with uid");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Routes>

  <Route path="/" element={<ShowBlogs />} />
  <Route path="/blogs/blog/:blogId" element={<BlogPage />} />

    </Routes>
  );
};

export default BlogRoutes;
