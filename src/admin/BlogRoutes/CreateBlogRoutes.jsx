// src/routes/BlogRoutes.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { query, collection, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase.jsx"; // Assuming your firebase is initialized here
import Addblogs from "../AddBlogs/Addblogs.jsx";
import AllBlogs from "../AddBlogs/AllBlogs";
import EditBlog from "../AddBlogs/EditBlog";
import BlogPage from "../AddBlogs/BlogPage";
import ShowBlogs from "../AddBlogs/ShowBlogs";
import CreateBlogLayout from "../Layout/CreateBlogLayout";
import Home from "../../pages/OtherScreens/home/Home.jsx";

const CreateBlogRoutes = () => {
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
          if (userData.isCreatePermission === true) {
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
      {isUserLogin ? (
        <Route element={<CreateBlogLayout />}>
          <Route path="/addblogs" element={<Addblogs />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/edit-blog/:blogId" element={<EditBlog />} />
          
        </Route>
      ) : (
        <Route path="/" element={<Home />} />
      )}
    </Routes>
  );
};

export default CreateBlogRoutes;
