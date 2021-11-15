import axios from "axios"

class AxiosCaller {
    static logInUser (email, password) {
        return axios.post('/api/auth/login', {email, password})
    }
}

export default AxiosCaller