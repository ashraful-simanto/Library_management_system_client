// import React from 'react';

import axios from "axios";

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    axios
      .post("https://library-management-system-8gnr.onrender.com", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4 flex flex-col  "
      >
        <legend className="fieldset-legend text-center text-3xl">
          Add New Book
        </legend>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Book title name"
        />
        <label className="label">Author Name</label>
        <input
          type="text"
          name="author"
          className="input w-full"
          placeholder="Enter name of the writer"
        />
        <label className="label">photo URL</label>
        <input
          type="url"
          name="image"
          className="input w-full"
          placeholder="Book cover photo URL"
        />
        <label className="label">Quantity</label>
        <input
          type="number"
          name="quantity"
          min={1}
          className="input w-full"
          placeholder="quantity"
        />

        <label className="label">Category</label>
        <select defaultValue="Pick a Category" className="select">
          <option disabled={true}>Pick a category</option>
          <option value="selfDevelopment">Self Development</option>
          <option value="fiction">Fiction</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="biography">Biography</option>
          <option value="mystery">Mystery & Thriller</option>
        </select>
        <label className="label">Short Description</label>
        <textarea
          type="text"
          name="shortDescription"
          className="input w-full"
          placeholder="Book title name"
        />
        <label className="label">Rating</label>
        <input
          type="number"
          name="rating"
          min={1}
          max={5}
          className="input w-full"
          placeholder="Enter category"
        />
        <label className="label">Book Content</label>
        <input
          type="text"
          name="content"
          className="input w-full"
          placeholder="Enter category"
        />
        <button className="btn btn-primary m-3" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
