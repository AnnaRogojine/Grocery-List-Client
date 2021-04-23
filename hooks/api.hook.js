import axios from 'axios';
import { useMemo } from 'react';



export function useApi() {

    const httpClient = useMemo(() => axios.create({
        baseURL: 'http://192.168.1.22:3000/api'
    }), [])

    const login = async () => await httpClient.get('/whatever')
    const getHouseDetails = async houseId => (await httpClient.get(`/houses/${houseId}`)).data
    const deleteProduct = async (houseId, productId) => (await httpClient.put(`/houses/DeleteProduct/${houseId}/${productId}`))
    const updateQuantity = async (houseId, productId, Quantity) => (await httpClient.put(`/houses/updateQuantity/${houseId}/${productId}/${Quantity}`))
    const getSupermarkets = async (lat, long) => (await httpClient.get('/maps/supermarkets', { params: { lat, long } })).data
    const getMyHistory = async (userID)=>(await httpClient.get(`/OldList/${userID}`)).data
    return { login, getHouseDetails, deleteProduct, updateQuantity, getSupermarkets,getMyHistory };

}