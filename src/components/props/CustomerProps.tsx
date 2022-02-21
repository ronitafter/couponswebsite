
interface CustomerPropsProps {
   id: number,
   first_name: string,
   last_name: string,
   email: string,
   password: string
}

function CustomerProps(props: CustomerPropsProps): JSX.Element {
   return (
      <div className="singleCustomerProps Box">
         <h1>Customer Info</h1><hr />
         ID: {props.id} <br />
         First name: {props.first_name} <br />
         Last name: {props.last_name} <br />
         email: {props.email} <br />
         password: {props.password} <br />
      </div>
   );
}

export default CustomerProps;