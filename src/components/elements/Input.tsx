import { TextField } from "@material-ui/core";

interface IInputProps {
  fullWidth?: boolean;
  value: string;
  label: string;
  type?: string;
  className?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<IInputProps> = ({
  fullWidth,
  label,
  value,
  type,
  className,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      fullWidth={fullWidth}
      className={className}
      value={value}
      label={label}
      variant="outlined"
      type={type}
      onChange={handleChange}
    />
  );
};
