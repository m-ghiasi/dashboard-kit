import Img from "../Img";

type BannerType = {
  className: string;
};

export default function Banner(props: BannerType) {
  const { className } = props;
  return <Img image="imagelink" className={`${className} w-full h-92 `}></Img>;
}
