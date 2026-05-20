// import React from 'react';

import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://library-management-system-8gnr.onrender.com/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 w-full">
      {categories.map((cat, index) => (
        <Category cat={cat} key={index} />
      ))}
    </div>
  );
};

export default Categories;
