type CheckBox = {
  name: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function BasicInput(props: CheckBox) {
  const {
    label,
    labelClassName,
    inputClassName,
    name,
    checked,
    onChange,
  } = props;
  return (
    <label className={labelClassName}>
      <input
        className={inputClassName}
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
