import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

import Login from "../Register/Login";
import Register from "../Register/Register";
import AddBook from "../Pages/AddBooks/AddBook";
import AllBooks from "../Pages/PublicPages/AllBooks";
import BorrowedBooks from "../Pages/AddBooks/BorrowedBooks";
import axios from "axios";
import CategoryBooks from "../Pages/PublicPages/CategoryBooks";
import ViewDetails from "../Pages/PublicPages/ViewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          axios.get("https://library-management-system-8gnr.onrender.com"),
      },
      {
        path: "/addBooks",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://library-management-system-8gnr.onrender.com"),
      },
      {
        path: "/borrowedBooks/:email",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-8gnr.onrender.com/${params.email}`,
          ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/books",
        Component: CategoryBooks,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const category = url.searchParams.get("category");

          return axios.get(
            `https://library-management-system-8gnr.onrender.com?category=${category || ""}`,
          );
        },
      },
      {
        path: "/books/:_id",
        Component: ViewDetails,
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-8gnr.onrender.com/${params._id}`,
          ),
      },
    ],
  },
]);

export default router;
