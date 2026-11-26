import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <p className="lead text-center">
          Reach Nova Cart by phone or email. The alternative lines are for
          order follow-up when the main desk is busy.
        </p>
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 mx-auto mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Store contact</h5>
                <p className="mb-2">
                  <strong>Address</strong>
                  <br />
                  48 Commerce Square, Andheri East, Mumbai 400069
                </p>
                <p className="mb-2">
                  <strong>Phone</strong>
                  <br />
                  <a className="text-dark" href="tel:+912261004800">
                    +91 22 6100 4800
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Alternative phone</strong>
                  <br />
                  <a className="text-dark" href="tel:+912261004801">
                    +91 22 6100 4801
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Email</strong>
                  <br />
                  <a className="text-dark" href="mailto:hello@novacart.shop">
                    hello@novacart.shop
                  </a>
                </p>
                <p className="mb-0">
                  <strong>Alternative email</strong>
                  <br />
                  <a className="text-dark" href="mailto:support@novacart.shop">
                    support@novacart.shop
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
