import React from 'react';
import ReactDOM from 'react-dom/client';


// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// class ColorCar extends React.Component {
//   constructor(props){
//     super(props)
//     this.color = {color : 'black'}
//   }
//   render(){
//     return(
//       <h2>this color {this.color.color}</h2>
//     )
//   }
// }

// const root1 = ReactDOM.createRoot(document.getElementById('root'));
// root1.render(<ColorCar/>);



// class Sum extends React.Component {
//   render() {
//     return (
//        <div>
//         <h2>Car name</h2>
//         <Garage />
//         <Car />
//         <ColorCar />
//        </div>
//     );
//   }
// }

// function Car1(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function Garage1() {
//   return (
//     <div>
//       <h1>Who lives in my garage?</h1>
//       <Car1 brand="Ford" />
//       <Sum />
//     </div>
//   );
// }

// const root2 = ReactDOM.createRoot(document.getElementById('root'));
// root2.render(<Garage1 />);

// function Car2(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function Surname(props){
//   return <h2>Surname {props.surname}</h2>
// }

// function Garage2() {
//   const carName = "Jonh";
//   const surN = 'Do'
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car2 brand={ carName } />
//       <Surname surname = {surN} />
//     </>
//   );
// }

// const root3 = ReactDOM.createRoot(document.getElementById('root'));
// root3.render(<Garage2 />);

// function Name(props){
//   return <h3>Mening ismim {props.name}</h3>
// }

// function Surname(props){
//   return <h3>Mening familiyam {props.surname}</h3>
// }

// function Age(props){
//   return <h3>Mening yoshim {props.age}</h3>
// }

// function Sum1(){
//   const personN = 'Imomboy'
//   const personF = 'Mirmahmudov'
//   const personA = 14
//   return(
//     <div>
//       <Name name = {personN} />
//       <Surname surname = {personF} />
//       <Age age = {personA} />
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Sum1 />);

// export default Sum1;