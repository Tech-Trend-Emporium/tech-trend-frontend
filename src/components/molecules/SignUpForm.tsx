import { InputField } from "../atoms";
import { Form } from "../organisms";


interface SignUpFormProps {
    formData: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
    };
    errorMessage: string | null;
    isFormValid: boolean;
    isLoading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

export const SignUpForm = ({
    formData,
    errorMessage,
    isFormValid,
    isLoading,
    handleChange,
    handleSubmit,
}: SignUpFormProps) => (
    <Form
        onSubmit={handleSubmit}
        submitButton={{
            text: "Create Account",
            disabled: !isFormValid || isLoading,
            isLoading,
            variant: "dark",
        }}
        errorMessage={errorMessage}
        className="space-y-1"
    >
        <InputField
            id="username"
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a unique username"
        />

        <InputField
            id="email"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
        />

        <InputField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
        />

        <InputField
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
        />
    </Form>
);