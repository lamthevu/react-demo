const Storage = {
    getToken(){
        return localStorage.getItem('token');
    },

    setToken(token){
        return localStorage.setItem('token', token);
    },

    removeToken(){
        return localStorage.removeItem('token');
    },

    getTokenHeader() {
        return localStorage.getItem('tokenHeader');
    },

    setTokenHeader(token) {
        return localStorage.setItem('tokenHeader', token);
    },

    removeTokenHeader() {
        return localStorage.removeItem('tokenHeader')
    }
};

export default Storage;
