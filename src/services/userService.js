import axios from '../store/axios';

async function getProfile(){
   const response = await axios.get('/profile/me').then(res => res.data).catch(err => err);
   return response.data;
};

export {
    getProfile,
}