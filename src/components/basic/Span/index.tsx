type spanType = {
  title: string;
  className: string;
};
export default function Span(props: spanType) {
  const { title, className } = props;
  return <span className={`${className}`}>{title}</span>;
}
