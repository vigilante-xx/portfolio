import React from "react";
import './Contactme.css';

const Contactme = () => {
  return (
    <div className="container-fluid contact-me-container content-section contact" id="contact">
      <div className="container">
        <h1 className="intro-text text-center">Contact Me</h1>
        <hr className="star-light" />
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-user"></i>
                </div>
                <input type="text" className="form-control" id="name" placeholder="Name" />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-at"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email ID"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-phone"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-default submit-button btn-lg btn-primary">
            <i className="fa fa-paper-plane"></i> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactme;