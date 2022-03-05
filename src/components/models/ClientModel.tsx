

//
// enum clientType {
//    company = "Company",
//    customer = "Customer",
//    admin = "Admin",
// }

class ClientModel {
   email!: string;
   password!: string;
   clientType!: string; //should actually be an enum but for some reason fails on ts type
}



export default ClientModel;
