

type TitleType = {
  title : string;
  className: string;
  
};
export default function Title(props: TitleType) {
  const { title,className}= props;
  return (
   <h1 className={`${className}`}>{title}</h1>
  );
}
