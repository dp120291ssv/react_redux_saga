import {INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS, SET_LATEST_NEWS, SET_POPULAR_NEWS, GET_NEWS} from "../constants";

export const increaseCount = () => ({
    type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
    type: DECREASE_COUNT,
});

export const getLatestNews = () => ({
    type: GET_LATEST_NEWS,
});

export const setLatestNews = (payload: any) => ({
    type: SET_LATEST_NEWS,
    payload
});

export const setPopularNews = (payload: any) => ({
    type: SET_POPULAR_NEWS,
    payload
});

export const getNews = () => ({
    type: GET_NEWS
});