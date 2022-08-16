export const reducer = ( state, action  ) => {

    const inc = "INC"
    const dec = "DEC"

    switch ( action.data ) {
        case inc:
            return state=state+1
        case dec:
            return state=state-1
        default:
            return state
    }
}