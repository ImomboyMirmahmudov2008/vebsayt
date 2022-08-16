import React from 'react'
import ReactDOM from 'react-dom/client';


function EventPage(){
    return(
        <header>
            <h1>hello world</h1>
        </header>
    )
}

export default EventPage


//     function Clock(props){
//         return(
//             <diV>
//                 <h1>hello world</h1>
//                 <h1>hozir soat {props.time.toLocaleTimeString()} bo'ldi</h1>
//             </diV>
//         )
//     }

    

//     export default function Sum(){

//         const d = new Date();

//         root.render(<Clock time = {d}/>)
        
//     }

// setInterval(Sum, 1000)

// function Football(){
//     const show = () => {
//         alert('gol uruldi')
//     }

//     return(
//         <div>
//             <button onClick={show}>click me</button>
//         </div>
//     )
// }
// root.render(<Football />)

// export default Football

// function Football1(){
//     const shoot= (a) => {
//         alert(a)
//     }

//     return(
//         <div>
//             <button onClick={() => {shoot('Goal')}}>click me</button>
//         </div>
//     )
// }

// root.render(<Football1 />)
// export default Football1


// function Football2() {
//   const shoot = (a, b) => {
//     alert(b.type);
//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// root.render(<Football2 />);

// export default Football2

// function MissedGoal(){
//     return <h1>Missed</h1>
// }

// function MadeGoal(){
//     return <h1>Goal!</h1>
// }

// function Goal(props){
//     const isGoal = props.isGoal

//     if(isGoal){
//         return <MissedGoal />
//     }
//     return <MadeGoal />
// }

// root.render(<Goal isGoal = {true}/>)

// export default Goal


// const root = ReactDOM.createRoot(document.getElementById('root'));