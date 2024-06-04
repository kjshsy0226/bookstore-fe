import React from "react";
import { useAtom } from "jotai";
import { booksAtom } from "../atoms/bookAtoms";

const BookList: React.FC = () => {
  const [books] = useAtom(booksAtom);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">도서 목록</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="border-b py-2">
            {book.title} - {book.author} - ₩{book.salePrice.toFixed(2)} - 재고:{" "}
            {book.stockQuantity}권
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
