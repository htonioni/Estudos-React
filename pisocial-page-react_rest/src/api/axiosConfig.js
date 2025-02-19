import axios from 'axios';

export const sendUserData = async (userData) =>{
    try {
        await axios.post('http://localhost:3000/usuarios', userData);
    } catch (error) {
        console.error(error);
    }
}