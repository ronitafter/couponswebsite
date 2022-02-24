import Client from "../models/Client";
import ClientModel from "../models/ClientModel";
import jwt_decode from "jwt-decode";
import { stringify } from "querystring";
import jwtDecode from "jwt-decode";
import { FormatListBulletedOutlined } from "@mui/icons-material";

//
export class StoreState {
   public loginClient: Client = new Client();
   public isLoggein: boolean = false;
}

export enum StoreActionType {
   LoginClient = "LoginClient",
   LogoutClient = "LogoutClient",
   RegisterUser = "RegisteUser",
   LoginClientString = "LoginClientString",
   IsLoggedIn = "IsLoggedIn"

}

export interface StoreAction {
   type: StoreActionType,
   payload?: any,
}

export function loginClient(user: Client): StoreAction {
   return { type: StoreActionType.LoginClient, payload: user }
}

export function logoutClient(): StoreAction {
   return { type: StoreActionType.LogoutClient, payload: null }
}

export function isLoged(isLogin: boolean): StoreAction {
   return { type: StoreActionType.IsLoggedIn, payload: isLogin }
}

export function registerClient(newClient: ClientModel): StoreAction {
   return { type: StoreActionType.RegisterUser, payload: newClient }
}

export function loginClientString(token: string): StoreAction {
   return { type: StoreActionType.LoginClientString, payload: token }
}


export function storeReducer(currentState: StoreState = new StoreState(), action: StoreAction): StoreState {
   const newState = { ...currentState };

   switch (action.type) {
      case StoreActionType.LoginClient:
         newState.loginClient = action.payload;
         //insert token with value of the token into local storage
         localStorage.setItem("token", action.payload);
         break;
      case StoreActionType.IsLoggedIn:
         newState.isLoggein = true;
         break;
      case StoreActionType.LogoutClient:
         newState.loginClient = new Client();
         //remove the token from local storage
         localStorage.removeItem("token");
         localStorage.removeItem("clientType");
         localStorage.removeItem("id");
         newState.isLoggein = false;
         break;
      case StoreActionType.RegisterUser:
         //axios->login->data->loginUser

         break;
      case StoreActionType.LoginClientString:

         newState.loginClient.token = action.payload;
         localStorage.setItem("token", newState.loginClient.token);
         newState.loginClient.clientType = (JSON.parse(JSON.stringify(jwt_decode(newState.loginClient.token)))).clientType;
         localStorage.setItem("userType", newState.loginClient.userType);
         if (newState.loginClient.clientType !== "Administrator") {
            newState.loginClient.clientId = (JSON.parse(JSON.stringify(jwt_decode(newState.loginClient.token)))).clientId;
            localStorage.setItem("id", newState.loginClient.clientId);
         }
         newState.isLoggein = true;
         break;
   }

   return newState;
}