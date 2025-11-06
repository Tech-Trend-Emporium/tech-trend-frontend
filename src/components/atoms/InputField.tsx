import { Label, TextInput } from "flowbite-react";


interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export const InputField = ({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  placeholder,
}: InputFieldProps) => (
  <div className="mb-4">
    <Label 
      htmlFor={id}
      className="mb-2 block text-gray-900 dark:text-gray-100 font-medium"
    >
      {label}
    </Label>
    <TextInput
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder || label}
      shadow
      className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
);