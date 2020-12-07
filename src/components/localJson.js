import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import '../css/localjson.css';  

//import data from "../custom_data/image_search.json";
//import data from "../custom_data/data.json";

//import hits from '../custom_data/image_search.json';
//var jsonData = require('../custom_data/image_search.json');
//var jsonData = require('../custom_data/data.json');
const todos = require('../custom_data/data.json');
/*const todos = [
    { id: 1, text: "Go to the gym", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Study for exams", completed: false },
    { id: 4, text: "Read a book", completed: false },
    { id: 5, text: "Clean the bedroom", completed: false },
    { id: 6, text: "Go to the park", completed: false }
];*/
export default class LocalJson extends Component {
        constructor() {
          super();
          this.state = {
            todoItems: todos,
            newUsername: "",
            newName: ""
            //newItem: "",
            //newName: ""
          };
          this.handleUsername = this.handleUsername.bind(this);
          this.handleName = this.handleName.bind(this);
        }
      
        addItem = (event) => {
          //console.log(event.target.value);
          event.preventDefault();
          this.setState(prevState => {
            console.log(prevState.newName);
            console.log(prevState.newItem);
            const addId = prevState.todoItems[prevState.todoItems.length - 1].id + 1;
            return {
              todoItems: [
                ...prevState.todoItems,
                //{ id: addId, username: prevState.newItem, name: prevState.newName, completed: false }
                { id: addId, username: prevState.newUsername, name: prevState.newName, completed: true }
                //{ id: Math.random(), username: prevState.newItem, completed: false }
                //{id: Math.random(), text: prevState.newItem, completed: false}
              ],
              //result: "",
              //newUsername: "",
              //newName: ""
            };

          });
        };
      
        handleUsername = (evt) => {
          this.setState({ 
            //newItem: event.target.value,
            newUsername: evt.target.value
          });
          console.log(evt.target.value);
        };
        handleName = (evt) => {
          console.log(evt.target.value);
          this.setState({ 
            //newItem: event.target.value,
            newName: evt.target.value
          });
          //console.log(evt.target.value);
        };
        addAction = (event) => {
            let x = this.state.newUsername + ' ' + this.state.newName
            this.setState({result: x })
            console.log(x);
        };
      
        render() {
          const itenary = this.state.todoItems;
          return (
            <div className="localjson-form-input">
                <form onSubmit={this.addItem}>
                {console.log(itenary)}

                    {/*<input
                    type="text"
                    onChange={this.handleInput.bind(this)}
                    value={this.state.newName}
                    placeholder="Add a new user"
                    />*/}
                    <input type="text" onChange={this.handleUsername} value={this.state.newUsername} placeholder="Add a new username"/>
                    <input type="text" onChange={this.handleName} value={this.state.newName} placeholder="Add a new name"/>
                    {/*<input
                    type="text"
                    onChange={this.handleName.bind(this)}
                    value={this.state.newName}
                    placeholder="Add a new user"
                    />*/}
                    {/*<button>Submit</button>*/}
                    <Button variant="secondary" type="submit" onClick={this.addAction} value={this.state.result}>Submit</Button>{' '}
                </form>
                <br />
                {itenary.map(todo => (
                    <div key={todo.id}>
                        <Todo handleClick={this.props.handleClick} thing={todo} />
                    </div>
                ))}
            </div>
          );
        }
      }
      
    class Todo extends Component {
        constructor() {
            super();
            this.state = {
                clicked: false,
                show: false
            };
        }
      
        handleClick = () => {
            //console.log(this.props.thing);
            //var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
            this.setState({ 
                clicked: !this.state.clicked,
                show: !this.state.show
            });
        };
        /*handleClickName = () => {
            console.log(this.props.thing);
            this.setState({ 
                clicked: !this.state.clicked
            });
        };*/
      
        render() {
            const { items } = this.props.thing;
            /*const styles = this.state.clicked
            ? { 
                textDecoration: "line-through",
                color: "red"
            }
            : { 
                textDecoration: "",
                color: "black" 
            };*/

            return (
                <div className="localjson-container">
                    {/*<div style={styles} onClick={this.handleClick} key={this.props.thing.id}>*/}
                    <div onClick={this.handleClick.bind( this )} key={this.props.thing.id}>
                        {this.props.thing.username}
 
                        <Card className={ !this.state.show ? "hidden" : "show" }>
                        <Card.Header>{ !this.state.clicked ? null : this.props.thing.username }</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {/*{ !this.state.clicked ? null : this.props.thing.company.name }*/}
                            </Card.Title>
                            <Card.Text>
                                 { !this.state.clicked ? null : 'Username: ' + this.props.thing.username } <br/>
                                 { !this.state.clicked ? null : 'Name: ' + this.props.thing.name }
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>
                    {/*<div onClick={this.handleClickName.bind( this )} key={this.props.thing.id}>
                        {this.props.thing.name}
                    </div>*/}
                    
                </div>
            );
        }
    }
      
//ReactDOM.render(<TodoList />, document.getElementById("root"));


