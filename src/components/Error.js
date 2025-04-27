import { useRouteError } from "react-router-dom";
const Errmsg=()=>{
    let err=useRouteError();
    err=err.data+" "+err.status+" "+err.statusText;
    return (
        <h1 >{err}</h1>
    );
};

export default Errmsg;