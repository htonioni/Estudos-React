import axios from 'axios';

export const sendUserData = async (userData) =>{
    try {
        await axios.post('http://localhost:3000/usuarios', userData);
    } catch (error) {
        console.error(error);
    }
}

export const checkUserData = async () => {
    try {
        // await axios.get('http://localhost:3000/usuarios', userData)
        await axios.get('http://localhost:3000/usuarios')
    } catch (error) {
        console.error(error)
    }
}