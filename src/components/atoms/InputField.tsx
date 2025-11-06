import { Label, TextInput } from "flowbite-react";


interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const InputField = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  required = true,
}: InputFieldProps) => (
  <div className="mb-4">
    <Label htmlFor={id}/>
    <TextInput
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      shadow
    />
  </div>
);
