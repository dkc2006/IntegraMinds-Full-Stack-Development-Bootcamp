import { useRouteError } from "react-router-dom";

const ErrorPage =()=>{
    const error = useRouteError();
    console.log(error);
    
    return (
        <div id="error-page">
            <h1>Oops!. This is our Custom Error Page</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                <li>
                    {error.statusText || error.message}
                </li>
            </p>
        </div>
    );
};

export default ErrorPage;