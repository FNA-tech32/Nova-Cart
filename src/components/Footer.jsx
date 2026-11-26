import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center bg-light border-top">
        <div className="container py-4">
          <h5 className="fw-bold mb-2">Nova Cart</h5>
          <p className="mb-3">
            48 Commerce Square, Andheri East, Mumbai 400069
          </p>
          <p className="mb-1">
            <i className="fa fa-phone mr-2"></i>
            <a className="text-dark" href="tel:+912261004800">
              +91 22 6100 4800
            </a>
          </p>
          <p className="mb-1">
            <i className="fa fa-phone mr-2"></i>
            Alternative:{" "}
            <a className="text-dark" href="tel:+912261004801">
              +91 22 6100 4801
            </a>
          </p>
          <p className="mb-1">
            <i className="fa fa-envelope mr-2"></i>
            <a className="text-dark" href="mailto:hello@novacart.shop">
              hello@novacart.shop
            </a>
          </p>
          <p className="mb-3">
            <i className="fa fa-envelope mr-2"></i>
            Alternative:{" "}
            <a className="text-dark" href="mailto:support@novacart.shop">
              support@novacart.shop
            </a>
          </p>
          <Link className="text-dark" to="/contact">
            Contact us
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
