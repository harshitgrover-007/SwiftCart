import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Img = () => {
  return (
    <div className="all-in-one">
      <div className="ok">
        <Link className="d-flex align-items-center gap-10 text-white">
          <img src="images/images/compare.svg" alt="" />
          <p className="all-p">
            Compare <br /> Products
          </p>
        </Link>
      </div>
      <div className="lie">
        <Link className="d-flex align-items-center gap-10 text-white">
          <img src="images/images/wishlist.svg" alt="" />
          <p className="all-p">
            My <br /> WishList
          </p>
        </Link>
      </div>
      <div className="okk">
        <Link className="d-flex align-items-center gap-10 text-white">
          <img src="images/images/user.svg" alt="" />
          <p className="all-p">
            My <br /> Account
          </p>
        </Link>
      </div>
      <div className="vaise">
        <Link className="d-flex align-items-center gap-10 text-white">
          <img src="images/images/cart.svg" alt="" />
          <div className="d-flex flex-column">
            <span className="badge bg-white text-dark">0</span>
             <p className="all-p">$500</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Img;
