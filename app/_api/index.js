import axios from "axios";
import { getAuthCookie } from "./cookies";

const API = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

// add auth header if user is authenticated
API.interceptors.request.use((req) => {
    if (typeof window !== 'undefined') {
        let token = getAuthCookie('jwt');
        if (token) req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// users 
export const loginUser = (data) => API.post(`/user/signin`, data);
export const registerUser = (data) => API.post(`/user/signup`, data);
export const getLoggedUser = () => API.get(`/user/me`);
export const updateLoggedUser = (data) => API.patch(`/user/me`, data);

// food
export const getFood = () => API.get(`/food`);
export const getFoodItem = (id) => API.get(`/food/${id}`);
export const getRestaurantFood = (id) => API.get(`/food/restaurant/${id}`);
export const getVegetarianFood = () => API.get(`/food/vegetarian`);
export const getLactoseFreeFood = () => API.get(`/food/lactoseFree`);
export const getSingleServingFood = () => API.get(`/food/single`);
export const getFamilyServingFood = () => API.get(`/food/family`);
export const getPartyServingFood = () => API.get(`/food/party`);
export const getBudgetFood = () => API.get(`/food/budget`);
export const getPremiumFood = () => API.get(`/food/premium`);

// shopping cart
export const getLoggedCart = () => API.get(`/cart/me`);
export const addToLoggedCart = (data) => API.patch(`/cart/me/add`, data);
export const removeFromLoggedCart = (data) => API.patch(`/cart/me/remove`, data);

// images
export const getImage = (id) => API.get(`/image/${id}`);

// business
export const getBusinesses = () => API.get(`/business`);
export const getBusiness = (id) => API.get(`/business/${id}`);

