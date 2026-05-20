import { Link } from "react-router";

const Category = ({ cat }) => {
  return (
    <div className="hero bg-base-200 rounded-2xl p-6">
      <div className="hero-content flex-col text-center">
        <img
          src={cat.image}
          alt={cat.title}
          className="w-72 h-72 object-cover rounded-2xl shadow-2xl"
        />

        <div className="mt-4">
          <h1 className="text-3xl font-bold">{cat.title}</h1>

          <Link to={`/books?category=${cat.shortName}`}>
            <button className="btn btn-primary mt-4">View Collection</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
