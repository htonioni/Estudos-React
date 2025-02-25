import axios from 'axios';

export const sendUserData = async (userData) =>{
    try {
        await axios.post('http://localhost:3000/usuarios', userData);
    } catch (error) {
        console.error(error);
    }
}

export const getUserData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/usuarios');
        console.table(response.data);
    } catch (error) {
        console.error(error);
    }
}