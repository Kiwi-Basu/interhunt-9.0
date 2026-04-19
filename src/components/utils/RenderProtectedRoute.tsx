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
    if (!condition && !devMode) {
        console.log(errorMessage)
        return <Navigate to={fallback} />
    }
    return <>{renderPage}</>
}

export default RenderProtectedRoute