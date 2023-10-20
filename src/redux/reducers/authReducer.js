import * as ACTIONTYPES from '../actionTypes'

export const initialState = {
    addCarts: [],
    likedProducts:[],




};
export default function auth(state = initialState, action) {
    console.log('action.payload', action.payload);
    switch (action.type) {

        case ACTIONTYPES.ADDCART:
            return {
                ...state,
                addCarts: action.payload,
            };

      {/*}
            case ACTIONTYPES.ADDLIKE:
                return {
                  ...state,
                  likedProducts: [...state.likedProducts, action.payload],
                };
            */}


        default:
            return state;
    }
}

