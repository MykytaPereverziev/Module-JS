const userInitialState = {
    name: '',
    surname: '',
    adress: '',
}

export default (state = userInitialState, action) => {
    switch (action.type){
        case 'UPDATE_NAME':
            return {...state, name: action.payload};
            default: return state
        case 'UPDATE_SURNAME':
                return {...state, surname: action.payload};
                
        case 'UPDATE_ADRESS':
                    return {...state, adress: action.payload};
                    
    }
}