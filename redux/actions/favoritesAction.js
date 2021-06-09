export const FETCH_FAVORITES = 'FETCH_FAVORITES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';  
import Axios from 'axios';
const BASE_URL='https://grocerysmartbuy.herokuapp.com/api';
//const BASE_URL = 'http://192.168.1.23:3000/api';
const api = Axios.create({baseURL: BASE_URL/*'http://192.168.1.23:3000/api'*/})

export const fetchFavorites = userId => {
    return async dispatch => {
        const favoritesList = (await api.get(`/favorite/${userId}`)).data;
        dispatch({type: FETCH_FAVORITES, payload: {favoritesList}})
    }
}

export const addToFavorites = itemId => {
    return {type: ADD_TO_FAVORITES, payload: {itemId}}
}

export const removeFromFavorites = itemId => {
    return {type: REMOVE_FROM_FAVORITES, payload: {itemId}}
}