import { Navigate } from "react-router";

const RenderProtectedRoute = ({
    condition ,
    renderPage,
    fallback,
    errorMessage,
    devMode = false,

} : {
    condition : boolean;
    renderPage : React.ReactNode;
    fallback : string;
    errorMessage : string;
    devMode? : boolean
}) => {
    const checkFailed = () => {
        if(!condition) {
            console.log(errorMessage)
            return <Navigate to={fallback} />
        }
    }
    return <div> {devMode ? renderPage : checkFailed()}</div>
}

export default RenderProtectedRoute