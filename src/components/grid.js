import React, { Component } from "react";

export default class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: [
                { id: 1, active: true },
                { id: 2, active: false },
                { id: 3, active: false },
            ]
        }
    }
    
    onChange = id => {
        const option = this.state.options.find(_ => _.id === id)
        const otherOptions = this.state.options.filter(_ => _.id !== id)
        
        this.setState({ options: [...otherOptions, { id, active: !option.active }] })
    }
    
    renderCheckbox = ({ id, active }) =>
        <label htmlFor={id} key={id}>
            <input type="checkbox" checked={active} id={id} onChange={e => this.onChange(id)} /> Virtual DOM wanderer #{id}
        </label>
    
    render () {
        return (
            <React.Fragment>
                <div className="box" title="normal checkboxes">
                    <label htmlFor="cb">
                        <input type="checkbox" id="cb" /> Permanent resident
                    </label>
                </div>
                
                <div className="box" title="active checkboxes">
                    { this.state.options.map(option => option.active && this.renderCheckbox(option)) }
                </div>
                
                <div className="box" title="inactive checkboxes">
                    { this.state.options.map(option => !option.active && this.renderCheckbox(option)) }
                </div>
            </React.Fragment>
        )
    }    
}

//document.addEventListener('click', event => console.log({ type: event.type, target: event.target }))
//document.addEventListener('change', event => console.log({ type: event.type, target: event.target }))