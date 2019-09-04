import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import './Skavastore.json';
var data={
  "classname" :["section-type"],
  "sectioncontent": ["Refine","Brand","color","price"],
  "sectioninner" :["Ujà vu (2)","grey (2)","0.0 TO 10000.0+ (2)"]
},str=[],count=1;
export default class Example extends React.Component{
  constructor(props){
    super(props);
    this.state={str1:""};
  }
  func = ()=>{
    for(var i=0;i<4;i++){
      if(count<=4){
    str.push(<div class="section-type">{data.sectioncontent[i]}</div>);
    count+=1;
      }
    }
    // return str;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({str1:str})
    }, 0)
  }
  render(){
    return(
     <div id="main-box">
        <div id="select-type">
            {this. func()}
            <p>{this.state.str1}</p>
          </div>
      </div>
    );
  }
}