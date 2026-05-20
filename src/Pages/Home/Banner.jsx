// import React from 'react';

import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full">
        <div className="bg-[url('https://i.ibb.co/qY03DQ5d/pexels-tima-miroshnichenko-9572637.jpg')] bg-cover bg-center h-screen w-full relative">
          {/* Text Container */}
          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <h1 className="text-5xl font-bold">Welcome to Book Universe</h1>

            <p className="py-6">
              Books open doors to worlds beyond imagination. Reading feeds the
              mind and strengthens the soul. A good book can change the way you
              see life.
            </p>

            <Link to='/signin'>
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
