import axios from 'axios'
const API = 'http://localhost:4000'

//all
export const getRecomendations = async () => {
    return await axios.get( `${API}/recomendations` )
} 
//create
export const createRecomendation = async (recomendation) => {
    return await axios.post(`${API}/recomendation`, recomendation)
} 
//one
export const getRecomendation = async (id) => {
    return await axios.get(`${API}/recomendation/${id}`)
} 
//update
export const updatedRecomendation = async (id, recomendation) => {
    return await axios.put(`${API}/recomendation/${id}`, recomendation)
} 
//delete
export const deleteRecomendation = async (id) => {
    return await axios.delete(`${API}/recomendation/${id}`)
}