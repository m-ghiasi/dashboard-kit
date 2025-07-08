

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationProps) {
  return (
    <div className="flex justify-between items-center mt-4 px-2">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded bg-gray-200 text-sm ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        قبلی
      </button>

      <span className="text-sm text-gray-700">
        صفحه {currentPage} از {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded bg-gray-200 text-sm ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        بعدی
      </button>
    </div>
  );
}
