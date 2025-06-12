import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
const axiousInstance = axios.create({ baseURL: 'http://localhost:3000' })
const useAxiousSecure = () => {
    const { user, LogOut } =useContext(AuthContext);
    axiousInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })
    // response interseptor
    axiousInstance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        console.log(error)
        if(error.status === 401 || error.status === 403){
            LogOut()
            .then(()=>{
                console.log('signOut from 401 status code')
            })
            .catch(err=>{
                console.log(err)
            })
        }
        console.log('error in interseptor',error)
        return Promise.reject(error)
    })

    return axiousInstance
};

export default useAxiousSecure;