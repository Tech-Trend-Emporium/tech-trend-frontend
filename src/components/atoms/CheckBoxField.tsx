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
    <Checkbox id={id} name={name} checked={checked} onChange={onChange} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);
