type patagraph = {
  className: string;
};
export default function Typography(props: patagraph) {
  const { className } = props;
  return <p className={className}></p>;
}
