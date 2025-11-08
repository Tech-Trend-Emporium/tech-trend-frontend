import { InputField} from "../atoms";
import { DropdownField } from "../atoms/DropDownField";
import { Form } from "../organisms";


interface SignUpFormProps {
    formData: {
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
        securityQuestion : string;
        securityAnswer : string;
    };
    errorMessage:{
        username: string;
        email: string;
        password: string;
        confirmPassword: string;
        securityQuestion : string;
        securityAnswer : string;
    };
    formError: string | null;
    isFormValid: boolean;
    isLoading: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
    handleSelect: (value :string) => void;
}

export const securityQuestions = [
  "What is your mother’s maiden name?",
  "What was the name of your first pet?",
  "What was your first car?",
  "What elementary school did you attend?",
  "What is your favorite book?",
  "What city were you born in?",
  "What is your favorite food?",
  "What was the name of your first teacher?",
  "What is the name of your best childhood friend?",
  "What is your dream job?",
];

export const SignUpForm = ({
    formData,
    errorMessage,
    isFormValid,
    isLoading,
    formError,
    handleChange,
    handleSubmit,
    handleSelect,
}: SignUpFormProps) => (
    <Form
        onSubmit={handleSubmit}
        submitButton={{
            text: "Create Account",
            disabled: !isFormValid || isLoading,
            isLoading,
            variant: "dark",
        }}
        errorMessage={formError}
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
            errorMessage = {errorMessage.username}
        />

        <InputField
            id="email"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            errorMessage = {errorMessage.email}
        />

        <InputField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            errorMessage = {errorMessage.password}
        />

        <InputField
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
            errorMessage = {errorMessage.confirmPassword}
        />

        <DropdownField 
            id = "securityQuestion"
            label = "Security Question"
            name = "securityQuestion"
            options = {securityQuestions}
            selected = {formData.securityQuestion}
            handleSelect = {handleSelect}
            errorMessage = {errorMessage.securityQuestion}
        />

        <InputField
            id="securityAnswer"
            label="Answer"
            name="securityAnswer"
            type="securityAnswer"
            value={formData.securityAnswer}
            onChange={handleChange}
            placeholder="Type your answer"
            errorMessage = {errorMessage.securityAnswer}
        />
    </Form>
);