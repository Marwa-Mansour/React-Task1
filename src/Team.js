import React, { Component } from 'react';
import "./App.css";

export class Team extends Component {
    render() {
        return (
            <div>
                <section className="team">

                    <div className="container">

                        <div className="row team-line">
                            <div className="col-12">
                                <hr />
                            </div>
                        </div>


                        <div className="row team-h">
                            <div className="col-12 text-center">
                                <h2>The Team</h2>
                            </div>
                        </div>

                        <div className="row t-members">
                            <div className="col-lg-3 col-md-6 col-sm-12 text-center">

                                <img src="images/person_1.jpg" alt="person1" className="img-fluid rounded-circle" />
                                <h4>Elizabeth Graham</h4>
                                <p className ="jobTitle">CEO/CO-FOUNDER</p>
                                <p className ="desc-t">Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae aut minima nihil
                                sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>

                            </div>



                            <div className="col-lg-3 col-md-6 col-sm-12 text-center">

                                <img src="images/person_2.jpg" alt="person1" className="img-fluid rounded-circle" />
                                <h4>Jennifer Greive</h4>
                                <p className ="jobTitle">CO-FOUNDER</p>
                                <p className ="desc-t">Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae aut minima nihil
                                sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>

                            </div>



                            <div className="col-lg-3 col-md-6 col-sm-12 text-center">

                                <img src="images/person_3.jpg" alt="person1" className="img-fluid rounded-circle" />
                                <h4>Patrick Marx</h4>
                                <p className ="jobTitle">MARKETING</p>
                                <p className ="desc-t">Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae aut minima nihil
                                sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>

                            </div>



                            <div className="col-lg-3 col-md-6 col-sm-12 text-center">

                                <img src="images/person_4.jpg" alt="person1" className="img-fluid rounded-circle" />
                                <h4>Mike Coolbert</h4>
                                <p className ="jobTitle">SALES MANAGER</p>
                                <p className ="desc-t">Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae aut minima nihil
                                sit distinctio recusandae doloribus ut fugit officia voluptate soluta.</p>

                            </div>


                        </div>

                    </div>

                </section>
            </div>
        )
    }
}

export default Team
