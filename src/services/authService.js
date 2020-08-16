import axios from '../store/axios';

const login = ({ user }) => {
    const response = axios.post('/auth/login', { ...user })
        .then(res => res.data).catch(err => err);
    return response
};

async function register ({ user }){
    const response = await axios.post('/auth/register', { ...user })
        .then(res => res.data)
        .catch(err => err);
    return response;
};

async function verifyCode({ code }) {
    const response = await axios.post('/auth/verify-code',{ code })
        .then(res => res.data)
        .catch(err => err);
    return response;
}

async function logout() {
    const response = await axios.get('/auth/logout' )
        .then(res => res.data)
        .catch(err => err);
    return response;
}


export {
    login,
    register,
    verifyCode,
    logout,
}
