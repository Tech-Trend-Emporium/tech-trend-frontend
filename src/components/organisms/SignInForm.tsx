import { CheckboxField, InputField, SignButton } from "../atoms";


interface SignInFormProps {
  formData: {
    emailOrUsername: string;
    password: string;
    rememberMe: boolean;
  };
  errorMessage: string | null;
  isFormValid: boolean;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const SignInForm = ({
  formData,
  errorMessage,
  isFormValid,
  isLoading,
  handleChange,
  handleSubmit,
}: SignInFormProps) => (
  <form onSubmit={handleSubmit}>
    <InputField
      id="emailOrUsername"
      label="Email"
      name="emailOrUsername"
      type="text"
      value={formData.emailOrUsername}
      onChange={handleChange}
    />

    <InputField
      id="password"
      label="Password"
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
    />

    <CheckboxField
      id="rememberMe"
      label="Remember me"
      name="rememberMe"
      checked={formData.rememberMe}
      onChange={handleChange}
    />

    <SignButton
      type="submit"
      label="log in"
      disabled={!isFormValid || isLoading}
      isLoading={isLoading}
    />

    {errorMessage && (
      <div className="mt-3 text-center text-red-600 text-sm font-medium">
        {errorMessage}
      </div>
    )}
  </form>
);
