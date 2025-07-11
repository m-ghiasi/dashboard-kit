type ParagraphType = {
  content: string;
  className: string;
};
export default function Paragraph(props: ParagraphType) {
  const { content, className } = props;
  return <p className={`${className}`}>{content}</p>;
}
