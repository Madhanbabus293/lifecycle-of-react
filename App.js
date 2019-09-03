import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

var x=prompt("Enter Your choise of color","color");
var y=prompt("Enter Your preferable Size","size");
var z=prompt("Enter Your preferable price","price");
export default class Example extends React.Component{
  constructor(props){
    super(props);
    this.state={
      color:x,
      size:y,
      price:z
    };
  }
  // static getDerivedStateFromProps(props,state){
  //   return{color:props.available};
  // }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount(){
    setTimeout(this.setState({color:"Green"}),5000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("root1").innerHTML =
    "Before the update, the color was " + prevState.color;
  }
  render(){
    return(
     <div id="example">
        <h3>color : {this.state.color}</h3>
        <h3>size : {this.state.size}</h3>
        <h3>price : ${this.state.price}</h3>
        <button id="style" onclick={this.dynamic}>Search</button>
      </div>
    )
  }
}