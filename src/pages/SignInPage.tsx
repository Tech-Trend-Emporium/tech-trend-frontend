import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useAuth } from "../hooks";
import type { SignInRequest } from "../models";
import { AuthTemplate, SignInForm } from "../components";

export const SignInPage = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const checkData = () => {
    const { emailOrUsername, password } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailOrUsername);
    const isPasswordFilled = password.trim() !== "";
    setIsFormValid(isEmailValid && isPasswordFilled);
  }

  useEffect(checkData, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const payload: SignInRequest = {
        emailOrUsername: formData.emailOrUsername,
        password: formData.password,
      };

      await signIn(payload);

      const stored = JSON.parse(localStorage.getItem("auth") || "{}");

      if (formData.rememberMe && stored.accessToken) {
        Cookies.set("accessToken", stored.accessToken, { expires: 7 });
        Cookies.set("refreshToken", stored.refreshToken, { expires: 7 });
      }

      if (stored.accessToken) {
        sessionStorage.setItem("accessToken", stored.accessToken);
        sessionStorage.setItem("refreshToken", stored.refreshToken);
      }

      if (stored.role === "ADMIN") { navigate("/sign-up") }
      if (stored.role === "EMPLOYEE") { navigate("/dashboard") }
      if (stored.role === "SHOPPER") { navigate("/products") }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.status === 401
            ? "Wrong credentials."
            : "Logging in error."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthTemplate imageSrc="./icon.png" imageAlt="Sign up illustration">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
        Sign in
      </h2>
      <SignInForm
        formData={formData}
        errorMessage={errorMessage}
        isFormValid={isFormValid}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </AuthTemplate>
  );
};

export default SignInPage;