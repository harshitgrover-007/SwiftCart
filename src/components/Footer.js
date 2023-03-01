import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { AiFillYoutube } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-100 align-items-center">
                <img src="images/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row otimepasspo">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6 text-white mb-2">
                  HNO: 277 Near College,
                  <br /> Ludhiana Punjab <br />
                  PinCode: 141009
                </address>
                <a className="mt-3 d-block mb-1 text-white" href="tel:+91 3852947385">
                  +91 3852947385
                </a>
                <a
                  href="mailto:harshitgrover2022@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  harshit@swiftcart.com
                </a>

                <div className="social_icons d-flex align-items-center gap-100 mt-4">
                  <a
                    className="text-white"
                    target="_blank"
                    href="https://github.com/harshitgrover-007"
                  >
                    <BsGithub className="texxt-white fs-4" />
                  </a>
                  <a
                    className="text-white"
                    target="_blank"
                    href="mailto:harshitgrover2022@gmail.com"
                  >
                    <VscMail className="texxt-white fs-4" />
                  </a>
                  <a
                    className="text-white"
                    target="_blank"
                    href="http://youtube.com/@codebridge07"
                  >
                    <AiFillYoutube className="texxt-white fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="tel:+91 3852947385"
                    target="_blank"
                  >
                    <FiPhoneCall className="texxt-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">My Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Harshit Grover
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
