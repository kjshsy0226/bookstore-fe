import { atom } from "jotai";

export const booksAtom = atom([
  {
    id: 1,
    title: "예제 도서",
    author: "저자 이름",
    salePrice: 19.99,
    stockQuantity: 10,
    soldQuantity: 0,
    totalSales: 0.0,
  },
]);

export const selectedBookAtom = atom(null);
