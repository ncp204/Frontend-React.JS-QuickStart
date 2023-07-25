import axios from '../axios'

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUser = (id) => {
    return axios.get('/api/user/' + id)
}

const createNewUser = (data) => {
    return axios.post('/api/user/create', data)
}

export {
    handleLogin,
    getAllUser,
    createNewUser
}