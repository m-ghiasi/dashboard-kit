type TitleType = {
  number: number;
  className: string;
};
export default function Number(props: TitleType) {
  const { number, className } = props;
  return <span className={`${className}`}>{number}</span>;
}
