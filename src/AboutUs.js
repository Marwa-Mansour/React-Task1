import React, { Component } from "react";
import "./App.css";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="aboutUs">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <h2>About Us</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src="images\about.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 col-sm-12">
              <h5 className="abouttxt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolores consequatur, tenetur
                    facere natus doloribus temporibus tempora, hic nostrum numquam labore velit. Odit illum nobis
                    cupiditate eveniet exercitationem maiores esse aperiam porro tempore animi dolorum ut sunt cumque
                    vero sit cum quia minima natus maxime, similique dignissimos facilis beatae? Perspiciatis ducimus
                    accusamus recusandae rem vel hic dolorum quod harum unde incidunt omnis, saepe inventore nihil rerum
                    id eveniet, similique, quo provident cupiditate dolores impedit iure laborum ab facilis? Iure
                    laudantium totam debitis amet architecto reiciendis perferendis vitae facilis voluptas quaerat,
                    earum sapiente deleniti, est fugit, nulla illum nisi minima unde! similique dignissimos facilis beatae? Perspiciatis ducimus
                    accusamus recusandae rem vel hic dolorum quod harum unde incidunt omnis, saepe inventore nihil rerum
                    id eveniet, similique, quo provident cupiditate dolores impedit iure laborum ab facilis? Iure
                    laudantium totam debitis amet architecto reiciendis perferendis vitae facilis voluptas quaerat,
                    earum sapiente deleniti, est fugit, nulla illum nisi minima unde!</h5>
                    <button className="green-btn d-lg-inline-block d-none"><a href="tour.html">Find More</a></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
