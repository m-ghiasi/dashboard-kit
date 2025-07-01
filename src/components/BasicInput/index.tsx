type BasicInput = {
  type: string;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  placeholder ?: string;
  onChange ?: (e: React.ChangeEvent<HTMLInputElement>) =>void;
  
}
export default function BasicInput(props: BasicInput) {
  const { type, label, labelClassName, inputClassName, onChange,placeholder } = props;
  return (
    <label className={labelClassName}>
      {label}
      {placeholder}
      <input className={inputClassName} type={type} onChange={onChange}/>
    </label>
  );
}
 