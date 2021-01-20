import axios from 'axios';

export const USER_API_BASE_URL = 'https://dev-api.pushleopard.com/';

class axiosInstance {

    login(credentials) {
        return axios.post(USER_API_BASE_URL + "rest-auth/login/", credentials);
    }
    
    getUserkey() {
        return (localStorage.getItem('key'));
    }
    getUserInfo() {
     
        return { headers: { Authorization: 'Bearer ' + this.getUserkey() } };

    }
    SendCampaign(credentials) {
        return axios.post(USER_API_BASE_URL + "campaigns/", credentials);
    }
    getCampaign() {
        return axios.get(USER_API_BASE_URL + "campaigns/",);
    }
    get_revenue_stats() {
        return axios.get(USER_API_BASE_URL + "stats/revenues/", this.getUserInfo());
    }
    get_top_location_stats() {
        return axios.get(USER_API_BASE_URL + "stats/topLocations/", this.getUserInfo());
    }
    get_campaigns_stats() {
        return axios.get(USER_API_BASE_URL + "stats/campaign_stats/" );
    }
    get_active_subscriber_stats() {
        return axios.get(USER_API_BASE_URL + "stats/activeSubscribers/");
    }
    get_impression_stats() {
        return axios.get(USER_API_BASE_URL + "stats/impressions/");
    }
    sales_graph() {
        return axios.get(USER_API_BASE_URL + "stats/salesGraph/");
    }
     WelcomeNotification(){
        return axios.get(USER_API_BASE_URL + "automation/welcome/");

     }
      BackInStock(){
        return axios.get(USER_API_BASE_URL + "automation/backinstock/");

     }
      shipping(){
        return axios.get(USER_API_BASE_URL + "automation/shipping/");

     }
      
     AbandonedCart(){
        return axios.get(USER_API_BASE_URL + "automation/abandonedcart/");

     }
        
     PriceDrop(){
        return axios.get(USER_API_BASE_URL + "automation/pricedrop/");

     }
      
    logOut() {

        localStorage.removeItem("userInfo");
      
        
        console.log("UserInfo: ", localStorage.getItem("userInfo"));

        return axios.post(USER_API_BASE_URL + 'rest-auth/logout/');
    }
}

export default new axiosInstance();