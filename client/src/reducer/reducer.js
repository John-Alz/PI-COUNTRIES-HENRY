let initialState = {
    countries: [],
    country: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_ALL":
            return{
                ...state,
                countries: action.payload
            }
        case "GET_NAME":
            return {
                ...state,
                countries: action.payload
            }
            case "GET_DETAIL_ID":
                return {
                    ...state,
                    country: action.payload
                }
        default: 
        return state
    }
}