
interface CompanyPropsProps {
   id: number,
   name: string,
   email: string
}

function SingleCompanyProps(props: CompanyPropsProps): JSX.Element {
   return (
      <div className="singleCompanyProps Box">
         id: {props.id} <br />
         name: {props.name} <br />
         email: {props.email} <br />
      </div>

   );
}

export default SingleCompanyProps;