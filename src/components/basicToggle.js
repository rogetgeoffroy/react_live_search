import React, { Component } from "react";
import { Image } from "react-bootstrap";


class Child extends React.Component {
    render() {
        return (    
            <div>          
                I am the child
            </div>            
        )             
    }
}

class OtherComponent extends React.Component {
    render() {       
        return (    
            <div>          
                I am the OtherComponent
            </div>            
        )           
    }
}

export default class BasicToggle extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            active: true,
            showImage: true,
            items: [
                {
                    id: 1, 
                    title: 'title 1', 
                    body: 'Body Text 2', 
                    image: 'https://via.placeholder.com/300',
                    thumbnail: 'https://via.placeholder.com/150'
                }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }
    /*handleClick = (item) => {
        this.setState({
            active: !this.state.active,
            title: item.title,
            body: item.body,
            image: item.image
        });
    }*/
    handleImage = (item) => {
        //console.log(item.image);
            this.setState({
                title: item.title,
                body: item.body,
                image: item.image,
                thumbnail: item.thumbnail,
                showImage: !this.state.showImage
            });
        
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <OtherComponent />
                {items.map(item => <div key={item.id}>
                    <Image key={item.id} onClick={this.handleImage.bind(this, item)} src="https://via.placeholder.com/150" fluid alt={ this.state.title }/>
                    <img src={!this.state.showImage ? this.state.image : null} alt={!this.state.showImage ? this.state.title : null} />
                </div>)}
                {!this.state.active && <Child />}

                <button type="button" onClick={this.handleClick}>
                    Toggle
                </button>
                

            </div>
        )
    }
}

