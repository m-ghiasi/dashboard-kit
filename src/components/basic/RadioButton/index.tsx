type RadioBtn = {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  value: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function BasicInput(props: RadioBtn) {
  const {
    label,
    labelClassName,
    inputClassName,
    name,
    value,
    checked,
    onChange,
  } = props;
  return (
    <label className={labelClassName}>
      <input
        className={inputClassName}
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
