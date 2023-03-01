import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="heading-timepass text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="head-time text-white mb-0">
                HelpLine:{" "}
                <a className="text-white" href="tel:+91 3852947385">
                  +91 3852947385
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row-timepass">
            <div className="col-2">
              <h2>
                <Link className="heading-timepass text-white">SwiftCart</Link>
              </h2>
            </div>
          </div>
          <div className="col-5 time">
            <div className="input-group timepass-search mb-3">
              <input
                type="text"
                className="form-control "
                placeholder="Search Product Here....."
                aria-label="Search Product Here....."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>

          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center all-in-one">
              <div className="ok">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/images/compare.svg" alt="" />
                  <p>
                    Compare <br /> Products
                  </p>
                </Link>
              </div>
              <div className="lie">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/images/wishlist.svg" alt="" />
                  <p>
                    My <br /> WishList
                  </p>
                </Link>
              </div>
              <div className="okk">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/images/user.svg" alt="" />
                  <p>
                    My <br /> Account
                  </p>
                </Link>
              </div>
              <div className="vaise">
                <Link className="d-flex align-items-center gap-10 text-white">
                  <img src="images/images/cart.svg" alt="" />
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                    <p>$500</p>
                  </div>
                </Link>
              </div>
              {/* */}
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center ">
                <div className="dropwdse">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle bg-transparent heading-timepass border-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="images/images/menu.svg"
                        alt=""
                        className="time-shop timepass-img"
                      />
                      <span className="me-5 d-inline-block time-shop">
                        SHOP CATEGORIES
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Dropdown item
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Dropdown item
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Dropdown item
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links heading-timepass-ok">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
