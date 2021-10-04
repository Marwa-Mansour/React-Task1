import React, { Component } from 'react';
import "./App.css";

export class Header extends Component {
    render() {
        return (
            <div>
                <section className="slider">
        <div id="carouselExampleControls" className="carousel slide sliders-me" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/welcome.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Welcome to NIS</h1>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                </div>
                <div className="carousel-item">
                    <img src="images/welcome2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/welcome3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="images/welcome4.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="sliders-txt">
            
        </div>
    </section>
            </div>
        )
    }
}

export default Header
