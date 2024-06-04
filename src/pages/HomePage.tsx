import React from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import TransactionForm from "../components/TransactionForm";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">서점 관리</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BookList />
        <BookForm />
        <TransactionForm />
      </div>
    </div>
  );
};

export default HomePage;
