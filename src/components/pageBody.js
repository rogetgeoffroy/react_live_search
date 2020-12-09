import React, { Component } from 'react';
import '../css/body.css';
import amenities from '../assets/Images/Amenities.jpg';
import residences from '../assets/Images/Residences.jpg';
import AmenitiesWave from './amenitiesWave';
import ResidencesWave from './residencesWave';


export default class Body extends Component {
      
    render() { 
        return(       
            <div className="body-container">

                <section className="masthead section-one">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-sm-2 hidden-xs"></div>
                            <div className="col-12 col-sm-8 text-center">
                                <p className="small-text est">Est. 1912</p>
                                <h1 className="font-weight-light">The New Classic</h1>
                                <p>With a tip of the hat to New York style, Herald Towers, previously the famous Hotel McAlpin, has been restored and reimagined, fusing accents of old classic grandeur with immaculate, innovative residences.</p>
                                <p>The striking renovations celebrate the best of New York’s history, with a nod to old school glamour and deco decadence, the amenities galore combines comfort and technology with a stroll down memory lane.</p>
                                <div className="view-availabilty">
                                    <a>View Availability</a>
                                </div>
                            </div>
                            <div className="col-sm-2 hidden-xs"></div>
                        </div>
                    </div>
                </section>

                <section className="py-5 section-two">
                    <div className="container amenities">
                        <div className="row h-100">
                            <div className="col-10 align-items-left">
                                <img src={amenities} alt="amenities" />
                            </div>
                            <div className="col-2">
                                <AmenitiesWave />
                            </div>
                            <div className="col-sm-1 hidden-xs"></div>
                            <div className="col-10 col-sm-8 text-body">
                                <h1 className="font-weight-light">A Playground <br />For The Patrons</h1>
                                <p>With a playful celebration of recess and respite, Herald Towers spares no expense in the design and provisions of the building's amenities.</p>
                                <div className="view-availabilty">
                                    <a>View Availability</a>
                                </div>
                            </div>
                            <div className="col-2 col-sm-3 quick-fact">
                                <p>Quick Fact: It cost $13.5m <br />to build the original Hotel <br />McAlpin in 1912. That’s <br />$358m today.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 section-three">
                    <div className="container residences">
                        <div className="row h-100">
                            <div className="col-12 align-items-left">
                                <img src={residences} alt="residences" />
                                <div className="residences-text-wave">
                                    <ResidencesWave />
                                </div>
                            </div>
                            <div className="col-sm-2 hidden-xs"></div>
                            <div className="col-12 col-sm-8 text-center">
                                <h1 className="font-weight-light">Classic Spacious Residences</h1>
                                <p>High ceilings, wide entryways, and oversized closets, the residences at Herald Towers maintain all the charisma of time-honored architecture, while full renovations snap apartments firmly into the now.</p>
                                <div className="view-availabilty">
                                    <a>View Availability</a>
                                </div>
                            </div>
                            <div className="col-sm-2 hidden-xs"></div>
                        </div>
                    </div>
                </section>

            </div>/* Body Container */
        );
    }

}