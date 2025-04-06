import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/InputAndButton/CustomInput";
import CustomButton from "../../components/InputAndButton/CustomButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function LoginModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      setErrorMessage("");
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        if (user.emailVerified) {
          onClose(); // close modal
          navigate("/");
        } else {
          setErrorMessage("Please verify your email first.");
        }
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl">&times;</button>

        <h2 className="text-xl font-semibold mb-4 text-center">Login to your account</h2>

        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            placeholder="Enter your email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <CustomInput
            placeholder="Enter your password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          <div className="flex justify-between text-sm mb-4">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-orange-500" /> Remember me
            </label>
            <a href="#!" className="text-orange-500 hover:underline">Forgot password?</a>
          </div>

          <CustomButton
            type="submit"
            text={loading ? "Logging in..." : "Login"}
            disabled={loading}
          />

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-orange-500 hover:underline"
              onClick={() => {
                onClose();
   
              }}
            >
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
