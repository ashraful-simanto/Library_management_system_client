// import React from 'react';

import axios from "axios";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { use } from "react";

const BookCard = ({ book }) => {
  const { name, image, shortDescription } = book;
  // console.log(book)

  const { user } = use(AuthContext);

  const handleBorrow = () => {
    const borrowData = {
      userEmail: user.email,
      bookId: book._id,
    };
    console.log("borrow data", borrowData);

    axios
      .post("https://library-management-system-8gnr.onrender.com", borrowData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full border shadow-sm pt-5">
      <figure>
        <img
          className=" w-57 h-64 object-cover rounded-2xl p-3"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <Link to={`/books/${book._id}`}>
            <div className="btn btn-primary">View Details</div>
          </Link>
          <button onClick={handleBorrow} className="btn btn-primary">
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
