import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';
import '../css/carousel.css';
import Card from 'react-bootstrap/Card';
import { Modal, Button, Image } from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-transition-group';



export default class CarouselSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            slideOn: true,
            isOpen: false,
            isClose: false,
            items: [
                {id: 1, title: 'item #1', body: 'Testing #1'},
                {id: 2, title: 'item #2', body: 'Testing #2', image: 'https://via.placeholder.com/1920x1080'},
                {id: 3, title: 'item #3', body: 'Testing #3'},
                {id: 4, title: 'item #4', body: 'Testing #4'},
                {id: 5, title: 'item #5', body: 'Testing #5'},
                {id: 6, title: 'item #6', body: 'Testing #6', image: 'https://via.placeholder.com/150'}
              ]
        }
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 700, itemsToShow: 3 },
            /*{ width: 991, itemsToShow: 3 },*/
            /*{ width: 1080, itemsToShow: 3, itemsToScroll: 2 },*/
            { width: 1080, itemsToShow: 4 },
            { width: 1260, itemsToShow: 5},
            /*{ width: 1560, itemsToShow: 5 },*/
            { width: 1750, itemsToShow: 6 },
        ]
    }
    
    /*handleClick(slideOn, items){
        let slideStatus = this.state[slideOn];
        this.setState({
            [slideOn]: !slideStatus,
        });
        console.log(this.state['slideOn']);
    }*/
    

    handleClick = (item) => {
        if ( item.id ) {
            this.setState({ 
                isOpen: true,
                isClose: {
                    color: 'black'
                },
                title: item.title,
                body: item.body,
                image: item.image
            });
        }
        console.log(item.id);

        /*this.change = setTimeout(() => {
            this.setState({isOpen: true})
        }, 500)*/
        /*let slideStatus = this.state[slideOn];
        this.setState({
            [slideOn]: !slideStatus
        });
        console.log(this.state['slideOn']);*/
        
    }

    handleClose = (item) => {
        if ( item.id ) {
            if ( this.state['isClose'] ) {
                this.setState({
                    isClose: {
                        color: 'red',
                        transform: 'scale(0)',
                        animation: 'modalSlideOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
                    }
                });
                //e.currentTarget.style.background = 'black';
                //console.log(this.state['isClose']);
            }
        }
    }
    

    //openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ 
        isOpen: false
    });

    
    render () {
        const settings = {
            itemPadding: [0, 20],
            itemsToShow: 3
        }
        const { items } = this.state;
        return (
        <div className="carousel-container">
          <Carousel {...settings} breakPoints={this.breakPoints}>
            {items.map(item => <div key={item.id}>
                <Card border-radius= "10px" bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                            <p>
                                {item.title}
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    {item.body}
                                </small>
                            </footer>
                    </blockquote>
                    <div id="modal-container" className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                    {/*<Button className="click-btn" variant="primary" onClick={this.openModal}>Click</Button>*/}
                        <div className="modal-background">
                            <Modal className="modal-container custom-map-modal" show={this.state.isOpen} onHide={this.closeModal} style={this.state.isClose}>
                                <Modal.Header closeButton>
                                {/*<div key={item.id} className="close-btn" onClick={this.handleClose.bind(this, item)}>Close</div>*/}
                                <Modal.Title>{this.state.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Image src={this.state.image} fluid />
                                    {this.state.body}
                                    <Image src={this.state.image} fluid />
                                    {this.state.body}
                                    <Image src={this.state.image} fluid />
                                    {this.state.body}
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                    
                    <div key={item.id} className="click-btn" onClick={this.handleClick.bind(this, item)}>
                        { this.state['slideOn'] ? 'ON' : 'OFF' }
                    </div>
                </Card>
            </div>)}
          </Carousel>
        </div>
        )
    }
}

