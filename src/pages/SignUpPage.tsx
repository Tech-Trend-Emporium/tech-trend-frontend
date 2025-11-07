import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { AuthTemplate } from "../components";
import { SignUpForm } from "../components/molecules/SignUpForm";


export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errorMessage) setErrorMessage(null);
    };

    const validateForm = (): boolean => {
        if (!formData.username.trim()) {
            setErrorMessage("Username is required");
            return false;
        } if (!formData.email.trim() || !formData.email.includes("@")) {
            setErrorMessage("Valid email is required");
            return false;
        } if (formData.password.length < 6) {
            setErrorMessage("Password must be at least 6 characters");
            return false;
        } if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match");
            return false;
        }
        return true;
    };

    const isFormValid =
        formData.username.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.email.includes("@") &&
        formData.password.length >= 6 &&
        formData.password === formData.confirmPassword;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        setErrorMessage(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            
            console.log("Registration successful:", formData);
        } catch (error) {
            setErrorMessage(
                error instanceof Error ? error.message : "Registration failed. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthTemplate imageSrc="./icon.png" imageAlt="Sign up illustration">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
                Sign Up
            </h2>
            <SignUpForm
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

export default SignUpPage;