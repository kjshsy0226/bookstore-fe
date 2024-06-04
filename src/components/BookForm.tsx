import React, { useState } from "react";
import { useAtom } from "jotai";
import { booksAtom } from "../atoms/bookAtoms";

const BookForm: React.FC = () => {
  const [books, setBooks] = useAtom(booksAtom);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
      salePrice: parseFloat(salePrice),
      stockQuantity: parseInt(stockQuantity, 10),
      soldQuantity: 0,
      totalSales: 0.0,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setSalePrice("");
    setStockQuantity("");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">도서 추가</h1>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="저자"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="판매 가격"
          value={salePrice}
          onChange={(e) => setSalePrice(e.target.value)}
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="재고 수량"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          className="border p-2 mb-2"
        />
        <button onClick={addBook} className="bg-blue-500 text-white p-2">
          도서 추가
        </button>
      </div>
    </div>
  );
};

export default BookForm;
