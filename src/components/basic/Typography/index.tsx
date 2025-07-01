type patagraph = {
  className: string;
  text: string
};
export default function Typography(props: patagraph) {
  const { className, text } = props;
  return <p className={className}>{text}</p>;
}
