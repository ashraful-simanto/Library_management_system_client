// import React from 'react';

import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const AllBooks = () => {
    const books=useLoaderData();
    console.log(books);
    return (
      <div className="">
        
        <div className="mb-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 p-5 text-white shadow-md">
         
          <h2 className="text-2xl font-bold">

            List of all Books
           
          </h2>
          <p className="text-xs opacity-70 mt-1">
            Discover books from this category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard book={book} key={book._id}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default AllBooks;