import {LOAD_RESTAURANTS, 
        GET_RESTAURANT_INFO, 
        BACK_TO_LIST, LOAD_DATA} 
from "./actions";

import {RESTAURANT_LIST, RESTAURANT_INFO, RESTAURANT_LOAD} from "./Pages";

export default function reducers(state, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {

        case LOAD_DATA:

            newState = Object.assign({}, loadData(newState, action.id));
            break;

        case LOAD_RESTAURANTS:

            newState = Object.assign({},loadRestaurants(newState, action.restaurants));
            break;

        case GET_RESTAURANT_INFO:

            newState = Object.assign({}, getRestaurantInfo(newState, action.id));

            break;

        case BACK_TO_LIST:

            nnewState = Object.assign({}, backToList(newState));

            break;

        default:
            return state;
    }

    return newState;
}

function loadData(newState){

    newState.page = RESTAURANT_LOAD;

    return newState;
}

function loadRestaurants(newState, restaurants){

    newState.page = RESTAURANT_LIST;
    newState.restaurants = restaurants;
    return newState;
}

function getRestaurantInfo(newState, id){

    newState.page = RESTAURANT_INFO;
    restaurant = newState.restaurants.find(item => item.id == id ? true: false);
    newState.selectedItem = restaurant;
    return newState;
}

function backToList(newState){

    newState.page = RESTAURANT_LIST;
    newState.selectedItem = undefined;
    return newState;
}
