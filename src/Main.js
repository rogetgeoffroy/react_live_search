import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/nav.css';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {Route,NavLink,HashRouter} from "react-router-dom";
import Search from './components/search';
import Click from './components/click';
import Toggle from './components/toggle';
import CarouselSlider from './components/carousel';
import Grid from './components/grid';
import BasicToggle from './components/basicToggle';
import LocalJson from './components/localJson';
import Body from './components/pageBody';
import Footer from './components/footer';

import menuIcon from './assets/menu_icon.png';
import hero from './assets/Images/Hero.jpg';
import logo from './assets/Logos/Main_Logo.svg';
//import Nav from './components/nav';

//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';

//import MenuIcon from '@material-ui/icons/Menu';

export default class Main extends Component {

    componentDidMount() {
        $(document).ready(function() {
            //$('.nav-container').find('.navbar-expand-lg').removeClass("navbar-expand-lg").addClass("navbar-expand-xxl");
            // SideNav Button Initialization
            //$(".button-collapse").sideNav2();
            // SideNav Scrollbar Initialization
           // var sideNavScrollbar = document.querySelector('.custom-scrollbar');
            //var ps = new PerfectScrollbar(sideNavScrollbar);
            //$('.custom-scrollbar').perfectScrollbar();
            var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;

            trigger.click(function () {

            hamburger_cross();      
            });

            function hamburger_cross() {
                if (isClosed === true) {          
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {   
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }
        
            $('[data-toggle="offcanvas"]').click(function () {
                    $('#wrapper').toggleClass('toggled');
            });
       });
    }

    render() {
        return (
            <HashRouter>
                <div id="wrapper" className="nav-container">

                <ul className="home-menu">
                    <li className="collapsible-header waves-effect">
                        <a className="btn btn-md btn-outline-secondary" href="#">Schedule Visit</a>
                    </li>
                    <li className="collapsible-header waves-effect">
                        <a href="#">212.736.5700</a>
                    </li>
                    <li className="collapsible-header waves-effect logo-image">
                        <a className="blog-header-logo text-dark" href="#"><img src={logo} alt="logo" /></a>
                    </li>
                    <li className="collapsible-header waves-effect">                        
                        <a href="#">Availability</a>
                    </li>
                    <li className="collapsible-header waves-effect">
                        <button type="button" className="hamburger animated fadeInRight is-closed" data-toggle="offcanvas">
                                <span className="hamb-top"></span>
                                <span className="hamb-middle"></span>
                                <span className="hamb-bottom"></span>
                        </button>
                    </li>
                    <nav id="sidebar-wrapper" className="navbar navbar-inverse" role="navigation">
                        <button type="button" className="hamburger animated fadeInRight is-closed" data-toggle="offcanvas">
                                <span className="hamb-top"></span>
                                <span className="hamb-middle"></span>
                                <span className="hamb-bottom"></span>
                        </button>
                        <ul className="nav sidebar-nav">
                            {/*<div className="sidebar-header">
                                <div className="sidebar-brand">
                                    <FontAwesomeIcon icon={faHome} /> Home
                                </div>
                            </div>*/}
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/amenities">Amenities</NavLink>
                            </li>
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/residences">Residences</NavLink>
                            </li>
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/heraldsquare">Herald Square</NavLink>
                            </li>
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/availabilty">Availabilty</NavLink>
                            </li>
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/history">History</NavLink>
                            </li>
                            <li className="collapsible-header waves-effect">
                                <NavLink to="/schedulevisit">Schedule Visit</NavLink>
                            </li>
                        </ul>
                        {/*</Nav>*/}
                        {/*<Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Navbar>*/}
                </nav>
                </ul>
                <div className="overlay"></div>

                {/*<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">*/}
                    {/*<Navbar.Brand href="#home">Home</Navbar.Brand>*/}
                    {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />*/}
                    {/*<Navbar.Collapse id="responsive-navbar-nav">*/}
                        {/*<Nav className="mr-auto">*/}
                    
                    <div id="page-content-wrapper" className="content sidenav-bg">
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <Route path="/search" component={Search}/>
                                    <Route path="/click" component={Click}/>
                                    <Route path="/toggle" component={Toggle}/>
                                    <Route path="/carousel" component={CarouselSlider}/>
                                    <Route path="/grid" component={Grid}/>
                                    <Route path="/basicToggle" component={BasicToggle}/>
                                    <Route path="/localJson" component={LocalJson}/>
                                </div>
                            </div>
                        </div>

                        <Body />

                    </div>

                </div>

                <footer class="page-footer font-small stylish-color-dark pt-4">
                    <Footer/>
                </footer>
                {/*<div>
                    <h1>Links</h1>
                    <ul className="header">
                        <li><NavLink to="/search">Search</NavLink></li>
                        <li><NavLink to="/click">Click</NavLink></li>
                        <li><NavLink to="/toggle">Toggle</NavLink></li>
                        <li><NavLink to="/nav">Nav</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/search" component={Search}/>
                        <Route path="/click" component={Click}/>
                        <Route path="/toggle" component={Toggle}/>
                        <Route path="/nav" component={Nav}/>
                    </div>
                </div>*/}
            </HashRouter>
        );
    }
}