
class ClientModel {
   email!: string;
   password!: string;
   clientType!: clientType;
}

enum clientType {
   company = "Company",
   customer = "Customer",
   admin = "Admin"
}

export default ClientModel;
