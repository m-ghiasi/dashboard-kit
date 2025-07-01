type ButtonType = {
  label?: string;
  className?: string;
  onclick : (event: React.MouseEvent<HTMLButtonElement>) => void;
  
};
export default function Button(props: ButtonType) {
  const { label, className,onclick } = props;
  return <button 
  onClick={onclick}
  className={`cursor-pointer ${className}`}>{label}</button>;
}
