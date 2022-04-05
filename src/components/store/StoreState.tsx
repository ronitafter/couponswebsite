import ClientModel from "../Coupons/ClientModel";
import OnlineClient from "../models/ClientDetails";

//
export class StoreState {
   public loginClient: OnlineClient = new OnlineClient();
   public isLoggein: boolean = false;
   static loginClient: any;
}

export enum StoreActionType {
   LoginClient = "LoginClient",
   LogoutClient = "LogoutClient",
   RegisterClient = "RegisterClient",
   SetClientCredentials = "SetClientCredentials",
   IsLoggedIn = "IsLoggedIn"

}

export interface StoreAction {
   type: StoreActionType,
   payload?: any,
}

export function loginClient(onlineClient: OnlineClient): StoreAction {
   return { type: StoreActionType.LoginClient, payload: onlineClient }
}

export function logoutClient(): StoreAction {
   return { type: StoreActionType.LogoutClient, payload: null }
}

export function isLoged(isLogin: boolean): StoreAction {
   return { type: StoreActionType.IsLoggedIn, payload: isLogin }
}

export function registerClient(newClient: ClientModel): StoreAction {
   return { type: StoreActionType.RegisterClient, payload: newClient }
}

export function setClientCredentials(token: string, clientType: string): StoreAction {
   return { type: StoreActionType.SetClientCredentials, payload: { token, clientType } }
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
         newState.loginClient = new OnlineClient();
         //remove the token from local storage
         localStorage.removeItem("token");
         localStorage.removeItem("clientType");
         localStorage.removeItem("id");
         newState.isLoggein = false;
         break;
      case StoreActionType.RegisterClient:
         //axios->login->data->loginUser

         break;
      case StoreActionType.SetClientCredentials:
         const { token, clientType } = action.payload;
         newState.loginClient.token = token;
         newState.loginClient.clientType = clientType
         localStorage.setItem("token", token);

         localStorage.setItem("clientType", newState.loginClient.clientType);
         if (newState.loginClient.clientType !== "Administrator") {

            localStorage.setItem("id", newState.loginClient.clientId);
         }
         newState.isLoggein = true;
         break;
   }

   return newState;
}