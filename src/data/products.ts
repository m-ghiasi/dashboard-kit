export type Order = {
  id: number;
  title: string;
  number: string;
  date: string;
  status: boolean;
  icon: string;
};

export const orders: Order[] = [
    { id: 1, title: "سفارش شماره ۱", number: "A-1001", date: "2025-07-01", status: false, icon: "📦" },
  { id: 2, title: "سفارش شماره ۲", number: "A-1002", date: "2025-07-01", status: true, icon: "✅" },
  { id: 3, title: "سفارش شماره ۳", number: "A-1003", date: "2025-06-30", status: false, icon: "❌" },
  { id: 4, title: "سفارش شماره ۴", number: "A-1004", date: "2025-06-29", status: false, icon: "💳" },
  { id: 5, title: "سفارش شماره ۵", number: "A-1005", date: "2025-06-28", status: false, icon: "🚚" },
  { id: 6, title: "سفارش شماره ۶", number: "A-1006", date: "2025-06-27", status: true, icon: "✅" },
  // { id: 7, title: "سفارش شماره ۷", number: "A-1007", date: "2025-06-26", status: false, icon: "📦" },
  // { id: 8, title: "سفارش شماره ۸", number: "A-1008", date: "2025-06-25", status: false, icon: "❌" },
  // { id: 9, title: "سفارش شماره ۹", number: "A-1009", date: "2025-06-24", status: true, icon: "✅" },
  // { id: 10, title: "سفارش شماره ۱۰", number: "A-1010", date: "2025-06-23", status: false, icon: "📦" },
  // { id: 11, title: "سفارش شماره ۱۱", number: "A-1011", date: "2025-06-22", status: false, icon: "💳" },
  // { id: 12, title: "سفارش شماره ۱۲", number: "A-1012", date: "2025-06-21", status: false, icon: "🚚" },
  // { id: 13, title: "سفارش شماره ۱۳", number: "A-1013", date: "2025-06-20", status: false, icon: "❌" },
  // { id: 14, title: "سفارش شماره ۱۴", number: "A-1014", date: "2025-06-19", status: true, icon: "✅" },
  // { id: 15, title: "سفارش شماره ۱۵", number: "A-1015", date: "2025-06-18", status: false, icon: "📦" },
  // { id: 16, title: "سفارش شماره ۱۶", number: "A-1016", date: "2025-06-17", status: false, icon: "💳" },
  // { id: 17, title: "سفارش شماره ۱۷", number: "A-1017", date: "2025-06-16", status: false, icon: "🚚" },
  // { id: 18, title: "سفارش شماره ۱۸", number: "A-1018", date: "2025-06-15", status: true, icon: "✅" },
  // { id: 19, title: "سفارش شماره ۱۹", number: "A-1019", date: "2025-06-14", status: false, icon: "❌" },
  // { id: 20, title: "سفارش شماره ۲۰", number: "A-1020", date: "2025-06-13", status: false, icon: "📦" },
  // { id: 21, title: "سفارش شماره ۲۱", number: "A-1021", date: "2025-06-12", status: true, icon: "✅" },
  // { id: 22, title: "سفارش شماره ۲۲", number: "A-1022", date: "2025-06-11", status: false, icon: "🚚" },
  // { id: 23, title: "سفارش شماره ۲۳", number: "A-1023", date: "2025-06-10", status: false, icon: "💳" },
  // { id: 24, title: "سفارش شماره ۲۴", number: "A-1024", date: "2025-06-09", status: false, icon: "❌" },
  // { id: 25, title: "سفارش شماره ۲۵", number: "A-1025", date: "2025-06-08", status: false, icon: "📦" },
  // { id: 26, title: "سفارش شماره ۲۶", number: "A-1026", date: "2025-06-07", status: true, icon: "✅" },
  // { id: 27, title: "سفارش شماره ۲۷", number: "A-1027", date: "2025-06-06", status: false, icon: "🚚" },
  // { id: 28, title: "سفارش شماره ۲۸", number: "A-1028", date: "2025-06-05", status: false, icon: "📦" },
  // { id: 29, title: "سفارش شماره ۲۹", number: "A-1029", date: "2025-06-04", status: false, icon: "💳" },
  // { id: 30, title: "سفارش شماره ۳۰", number: "A-1030", date: "2025-06-03", status: false, icon: "❌" }
];
