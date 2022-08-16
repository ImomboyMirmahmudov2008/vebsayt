import React, { useReducer } from 'react';
import {reducer} from "./Reducer";

function Counter() {

    const initialState = 0

    const [ count, dispatch ] = useReducer( reducer, initialState )
    return (
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={ () => dispatch( { data: "INC" } ) }>INC</button>
            <button onClick={ () => dispatch( { data: "DEC" } ) }>DEC</button>
        </div>
    );
}

export default Counter;