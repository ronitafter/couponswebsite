import "./Page404.css";
interface Page404Props {
  msg?: string;
}
function Page404(props: Page404Props): JSX.Element {
  return (
    <div className="Page404">
      {
        props.msg ? <p>{props.msg}</p> : <p>404 Not FOUND</p>
      }

    </div>
  );
}

export default Page404;
