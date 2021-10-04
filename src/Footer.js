import React, { Component } from 'react';
import "./App.css";

export class footer extends Component {
    render() {
        return (
            <div>
                <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h6>Admission</h6>
                    <ul className="ft-list">
                        <li><a href="/">Pre-Kg and Kg</a></li>
                        <li><a href="/">Primary</a></li>
                        <li><a href="/">Middle</a></li>
                        <li><a href="/">High</a></li>
                    </ul>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h6>Useful Links</h6>
                    <ul className="ft-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Our Locations</a></li>
                        <li><a href="/">Our Mission and Vision</a></li>
                        <li><a href="/">Join Us</a></li>
                    </ul>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h6>Curricula</h6>
                    <ul className="ft-list">
                        <li><a href="/">English</a></li>
                        <li><a href="/">Math</a></li>
                        <li><a href="/">Science</a></li>

                    </ul>

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h6>Find Us on Social Media</h6>
                    <ul className="ft-list">
                        <li><a href="/"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                        <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                        <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                        <li><a href="/"><i className="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </footer>
            </div>
        )
    }
}

export default footer
