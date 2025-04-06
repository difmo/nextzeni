import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/InputAndButton/CustomInput";
import CustomButton from "../../components/InputAndButton/CustomButton";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth, db } from "../../firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import { collection, addDoc } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function SignUpScreen({ closeModal }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const waitForEmailVerification = async (user) => {
    const interval = setInterval(async () => {
      await user.reload();
      if (user.emailVerified) {
        clearInterval(interval);
        setSuccessMessage("Email successfully verified!");
        closeModal();
        navigate("/loginscreen");
      }
    }, 5000);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: values.name,
          email: user.email,
          whoIs: "isUser",
          isCreatePermission: false,
          isVlogCreatePermission: false,
          isCourseContentCreatePermission: false,
          isCourseWithVideoCreatePermission: false,
          createdAt: new Date(),
        });

        await sendEmailVerification(user);
        setSuccessMessage("Verification email sent! Please check your inbox.");
        waitForEmailVerification(user);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <button className="float-right text-gray-500" onClick={closeModal}>✖</button>
        <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
          />
          {formik.touched.name && formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}

          <CustomInput
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          {formik.touched.email && formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}

          <CustomInput
            placeholder="Enter your password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
          />
          {formik.touched.password && formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <CustomButton type="submit" disabled={loading} text={loading ? "Registering..." : "Register"} />
          <p className="text-sm mt-3 text-center">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => {
              closeModal();
              navigate("/loginscreen");
            }}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
