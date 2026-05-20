import { useLoaderData } from "react-router";
import BookCard from "./BookCard";

const CategoryBooks = () => {
  const books = useLoaderData();

  const cat = books.data.length > 0 ? books.data[0].category : "";

  return (
    <div className=" m-3 w-full z-40 px-4">
      {/* Banner */}
      <div className="mb-4 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 p-5 text-white shadow-md">
        <p className="text-sm opacity-80">📚 Now browsing</p>
        <h2 className="text-2xl font-bold">
          {cat === "" ? "All Collections" : `${cat} Collection`}
        </h2>
        <p className="text-xs opacity-70 mt-1">
          Discover books from this category
        </p>
      </div>

    
      {books.data.length === 0 ? (
        <h1>No books available right now for this collection</h1>
      ) : (
        <>
          <h1 className="mb-3">Collections for {cat}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {books.data.map((book) => (
              <BookCard book={book} key={book._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryBooks;
