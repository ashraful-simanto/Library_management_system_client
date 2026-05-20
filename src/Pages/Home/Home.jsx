// import React from 'react';

import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Categories from "./Categories";

const Home = () => {
    const categories=useLoaderData();

    return (
      <div>
        <Banner></Banner>
        <Categories categories={categories}></Categories>
      </div>
    );
};

export default Home;