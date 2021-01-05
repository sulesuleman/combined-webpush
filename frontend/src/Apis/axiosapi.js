import axios from 'axios';

export const USER_API_BASE_URL = 'ec2-13-58-105-159.us-east-2.compute.amazonaws.com:8000/';

class axiosInstance {

    login(credentials) {
        return axios.post(USER_API_BASE_URL + "rest-auth/login/", credentials);
    }
    
    
    logOut() {

        localStorage.removeItem("userInfo");
      
        
        console.log("UserInfo: ", localStorage.getItem("userInfo"));

        return axios.post(USER_API_BASE_URL + 'rest-auth/logout/');
    }
}

export default new axiosInstance();