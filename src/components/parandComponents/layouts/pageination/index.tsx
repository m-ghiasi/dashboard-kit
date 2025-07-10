import Button from "../../../basic/Button";


type PaginationType = {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
};

export default function Pagination(props: PaginationType) {
  const { currentPage, totalPages, onNext, onPrev } = props;
  return (
    <div className="flex justify-between items-center mt-4 px-2">
      <Button
        onclick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded bg-gray-200 text-sm ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        قبلی
      </Button>

      <span className="text-sm text-gray-700">
        صفحه {currentPage} از {totalPages}
      </span>

      <Button
        onclick={onNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded bg-gray-200 text-sm ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        بعدی
      </Button>
    </div>
  );
}
