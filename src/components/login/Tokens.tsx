
import axios from "axios";
import Store from "../store/Store";

//axios => singleTon
const jwtAxios = axios.create();

jwtAxios.interceptors.request.use(request => {
   request.headers = {
      "authorization": "Bearer " + "jwt token" + Store.getState().StoreState.loginClient.token,
   }
   return request;
});

jwtAxios.interceptors.response.use(response => {
   Store.getState().StoreState.loginClient.token = response.headers.authorization;
   localStorage.setItem("token", Store.getState().StoreState.loginClient.token);
})

export default jwtAxios;