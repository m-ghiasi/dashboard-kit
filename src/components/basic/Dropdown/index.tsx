type DropdownType = {
  options: string[];
  name?: string;
  value: string;
  selectClassName?: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
  label?: string;
};
export default function Dropdown(props: DropdownType) {
  const { name, options, value, selectClassName, onChange, label } = props;
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium">{label}</span>
      <select
        onChange={onChange}
        name={name}
        value={value}
        className={selectClassName}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
