import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/images/main-banner.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banenr"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Special Sale</h5>
                  <p>
                    From $999.or $41.62/mo.
                    <br />
                    for 24mo. Footnote*
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banenr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE!!!</h4>
                    <h5>Laptops Maxxx</h5>
                    <p>
                      From $1699.or
                      <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banenr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF!!!</h4>
                    <h5>
                      {" "}
                      <img
                        src="images/images/apple-logo.png"
                        alt="apple"
                        className="apple-logo"
                      />{" "}
                      Watch
                    </h5>
                    <p>Shop the latest watches!!!</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banenr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SPECIALLY FOR YOU</h4>
                    <h5>BUY iPad Air</h5>
                    <p>
                      From $599.or
                      <br /> $49.91/mo. for 12 mo.*
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banenr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>
                      {" "}
                      <img
                        src="images/images/apple-logo.png"
                        alt="apple"
                        className="apple-logo"
                      />{" "}
                      AirPods Max
                    </h5>
                    <p>
                      High Fidelity playback &
                      <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
