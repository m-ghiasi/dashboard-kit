type TextInput = {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function BasicInput(props: TextInput) {
  const { label, labelClassName, inputClassName, onChange, placeholder } =
    props;
  return (
    <label className={labelClassName}>
      {label}
      {placeholder}
      <input className={inputClassName} type="text" onChange={onChange} />
    </label>
  );
}
