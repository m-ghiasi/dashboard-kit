type ModalType = {
  children: React.ReactNode;
  WrapperClassName?: string;
  divClassName?: string;
};

export default function Modal(props: ModalType) {
  const { children, WrapperClassName, divClassName } = props;
  return (
    <div
      className={`${WrapperClassName} fixed left-0 top-0 bottom-0 right-0 bg-opacity-50 flex justify-center items-center`}
    >
      <div className={`${divClassName}`}>
        {children}
      </div>
    </div>
  );
}
