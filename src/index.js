import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// task#1
// class HelloWorld extends React.Component {
//   render() {
//     return React.createElement('div', null, this.props.separator);
//   }
// }

// const el = React.createElement(HelloWorld, {separator: "Hello world"})
// console.log(el)

// // task#2
// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );

// task#3
// const el2 = "!";
// ReactDOM.render(
//   <div>Hello world{el2}</div>,
//   document.getElementById('root')
// );

// task#4
// ReactDOM.render(
//   <div>Summ 2 + 2 = {2+2}</div>,
//   document.getElementById('root')
// );

// task#5
// const el3 = () => {
//   return 3 * 4
// }
// ReactDOM.render(
//   <div>Summ 3 * 4 = {el3()}</div>,
//   document.getElementById('root')
// );

// task#6
// const El4Component = () => {
//   return <div>Hello world</div>
// }
// ReactDOM.render(
//   <div>{El4Component()}</div>,
//   document.getElementById('root')
// );

// task#7
// const El4Component = () => {
//   return <div>Hello world</div>
// }
// ReactDOM.render(
//   <El4Component/>,
//   document.getElementById('root')
// );

// task#8
// const Task8Component = (props) => {
//   return <div>Hello{props.sep}world</div>
// }
// ReactDOM.render(
//   <Task8Component sep=" $ "/>,
//   document.getElementById('root')
// );

// task#9
// const Task9Component = (props) => {
//   return <div>Hello{props.sep}world {props.summ}</div>
// }
// ReactDOM.render(
//   <Task9Component sep=" $ " summ={2+2}/>,
//   document.getElementById('root')
// );

// task#10
// const Task10Component = (props) => {
//   return <div>{JSON.stringify(props, null, " ")}</div>
// }
// ReactDOM.render(
//   <Task10Component sep=" $ " summ={2+2}/>,
//   document.getElementById('root')
// );

// task#11
// const Task11Component = ({sep, summ}) => {
//   return <div>Hello{sep}world {summ}</div>
// }
// ReactDOM.render(
//   <Task11Component sep=" $ " summ={2+2}/>,
//   document.getElementById('root')
// );

// task#12.1
// const Task121Component = ({sep, summ, attr1}) => {
//   console.log(!attr1);
//   return <div>Hello{sep}world {summ}</div>
// }
// const Task12Component = (props) => {
//   return <Task121Component {...props} attr1/>
// }
// ReactDOM.render(
//   <Task12Component sep=" $ " summ={2+2}/>,
//   document.getElementById('root')
// );

// task#13
// const Task13Component = ({obj}) => {
//   return <div>Hello world {obj.param1}</div>
// }
// ReactDOM.render(
//   <Task13Component obj={{param1:0}}/>,
//   document.getElementById('root')
// );

// task#14
// const divStyle = {
//   backgroundColor:"green",
// }
// ReactDOM.render(
//   <div style={divStyle}>Hello world</div>,
//   document.getElementById('root')
// );

// task#15
// ReactDOM.render(
//   <div style={{backgroundColor:"lightgreen",}}>Hello world</div>,
//   document.getElementById('root')
// );

// task#16
ReactDOM.render(
  <div className="bg-color-aqua">Hello world</div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
