import { Checkbox, Label } from "flowbite-react";


interface CheckboxFieldProps {
  id: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxField = ({ id, label, name, checked, onChange }: CheckboxFieldProps) => (
  <div className="flex items-center gap-2 mb-6">
    <Checkbox 
      id={id} 
      name={name} 
      checked={checked} 
      onChange={onChange}
      className="focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
    />
    <Label 
      htmlFor={id}
      className="text-gray-900 dark:text-gray-100 cursor-pointer"
    >
      {label}
    </Label>
  </div>
);