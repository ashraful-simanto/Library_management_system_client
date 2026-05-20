// import React from 'react';

// import { use } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";

const BorrowedBooks = () => {
  const borrow = useLoaderData();

  const [borrowed, setBorrow] = useState(borrow);

  const handleDelete = (id) => {
    fetch(`https://library-management-system-8gnr.onrender.com/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          const remaining = borrowed.filter((book) => book.bookId !== id);

          setBorrow(remaining);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Category</th>
            <th>Date of Borrow</th>
            <th>Date of Expire</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {borrowed.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>

              <td>{book.bookName}</td>

              <td>{book.category}</td>

              <td>{book.borrowDate}</td>

              <td>{book.expiryDate}</td>

              <td>
                {book.status === "borrowed" ? (
                  <button
                    onClick={() => handleDelete(book.bookId)}
                    className="btn btn-error btn-sm"
                  >
                    Return
                  </button>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;

// https://library-management-system-mu-lemon.vercel.app
