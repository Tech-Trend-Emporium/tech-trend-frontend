import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { AuthService } from "../services";
import type { SignInRequest, SignInResponse } from "../models";
import { SignInForm, SignInTemplate } from "../components";
import { setAuth } from "../hooks";


export const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {

    //Checks if token exists
    const token = Cookies.get("refreshTokenCookie");

    if (token) {
      console.log("Cookie already exists, we're validating token");

      // Checks if the token is valid
      AuthService.refresh(token)
        .then((res) => {
          Cookies.set("accessTokenCookie", res.accessToken, { expires: 7 });
            Cookies.set("refreshTokenCookie", res.refreshToken, { expires: 7 });
            Cookies.set("roleCookie", res.role, { expires: 7 });

            sessionStorage.setItem("accessTokenCookie", res.accessToken);
            sessionStorage.setItem("refreshTokenCookie", res.refreshToken);
            sessionStorage.setItem("roleCookie", res.role);

            if (res.role === "ADMIN") {navigate("/sign-up")}
            if (res.role === "EMPLOYEE") {navigate("/products")}
            if (res.role === "SHOPPER") {navigate("/")}
        })
        .catch((err) => {
          console.warn("Invalid or expired cookie, sign in please");
          Cookies.remove("accessTokenCookie");
          Cookies.remove("refreshTokenCookie");
          Cookies.remove("roleCookie");
        });
    }
  }, [navigate]);

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
      const response: SignInResponse = await AuthService.signIn(payload);

      if (formData.rememberMe) {
        Cookies.set("accessTokenCookie", response.accessToken, { expires: 7 });
        Cookies.set("refreshTokenCookie", response.refreshToken, { expires: 7 });
        Cookies.set("roleCookie", response.role, { expires: 7 });        
      }

      sessionStorage.setItem("accessTokenCookie", response.accessToken);
      sessionStorage.setItem("refreshTokenCookie", response.refreshToken);
      sessionStorage.setItem("roleCookie", response.role);
      
      if (response.role === "ADMIN") {navigate("/sign-up")}
      if (response.role === "EMPLOYEE") {navigate("/products")}
      if (response.role === "SHOPPER") {navigate("/")}
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
    <SignInTemplate imageSrc="./icon.png">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
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
    </SignInTemplate>
  );
};

export default SignInPage;
