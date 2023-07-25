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

const deletUserService = (userId) => {
    // return axios.delete('/api/user/delete', { id: userId })
    return axios.delete('/api/user/delete', {
        data: {
            id: userId
        }
    })
}

export {
    handleLogin,
    getAllUser,
    createNewUser,
    deletUserService
}