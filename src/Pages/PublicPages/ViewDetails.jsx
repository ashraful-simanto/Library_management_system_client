// import React from 'react';

import axios from "axios";
import { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const ViewDetails = () => {
  const { user } = use(AuthContext);
  const book = useLoaderData();
  const { name, image, shortDescription, quantity, author, content, rating } =
    book;

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
    <div className="flex flex-col-reverse lg:flex-row text-left border shadow-accent m-5 p-10 rounded-2xl ">
      <div className="flex-1 shadow-2xl p-5 flex flex-col">
        <h1 className="text-2xl font-bold m-2">Book Name : {name}</h1>
        <p className="font-bold my-4">Writer : {author}</p>
        <p className="font-bold ">Rating : {rating}</p>
        <p className="my-3">
          <span className="font-bold">Content</span> : {content}
        </p>
        <p>
          <span className="font-bold">Short Description</span> :{" "}
          {shortDescription}
        </p>
        <p className="font-bold my-4">Available Quantity : {quantity}</p>

        <div className="mt-auto flex justify-end pt-6 m-10">
          <button onClick={handleBorrow} className="btn btn-primary">
            Borrow
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={image}
          className="p-5 rounded-2xl shadow-2xl max-w-sm lg:max-w-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default ViewDetails;
