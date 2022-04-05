
export enum ClientType {
   ADMINISTRATOR = "ADMINISTRATOR",
   COMPANY = "COMPANY",
   CUSTOMER = "CUSTOMER"
}

class ClientModel {
   email!: string;
   password!: string;
   clientType!: ClientType;


}


export default ClientModel;

