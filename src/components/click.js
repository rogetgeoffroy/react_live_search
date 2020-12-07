import React, { Component } from 'react';
import '../css/click.css';


export default class Click extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [
            {name: 'Name 1', id: 133},
            {name: 'Name 2', id: 456},
            {name: 'Name 2', id: 22},
            {name: 'Name 4', id: 709},
            {name: 'Name 5', id: 543},
            {name: 'Name 6', id: 123},
            {name: 'Name 7', id: 11},
            {name: 'Name 8', id: 9}
          ]
        }
    }
      
    getComponent = (d, e) => {
        function getEven(num){
            let count = 0;
            while (num){
                count += num % 2 === 0;
                num = Math.floor(num/10);
            }
            return count;
        }

        //Set Style
        if (getEven(d.id)) {
        //if (d.id === 456 ) {
            console.log(d.id);
            e.currentTarget.style.background = 'black'
            e.currentTarget.style.color = 'white'
        }
        else{
            e.currentTarget.style.background = 'red'
            e.currentTarget.style.color = 'white'
        }
        
    }
      
    render() { 
        return(       
            <div className="click-event-list">
                <ul>
                    {this.state.data.map(d => {
                        return(
                            <li key={d.id} onClick={this.getComponent.bind(this, d)}>{d.name}</li>
                        )}
                    )}
                </ul>
            </div>
        );
    }

}