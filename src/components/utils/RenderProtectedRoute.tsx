import { Navigate } from "react-router";

const RenderProtectedRoute = ({
    condition,
    renderPage,
    fallback,
    errorMessage,
    devMode = false,
    isLoading = false,
} : {
    condition : boolean;
    renderPage : React.ReactNode;
    fallback : string;
    errorMessage : string;
    devMode? : boolean;
    isLoading? : boolean;
}) => {
    // Wait for auth to resolve before enforcing the guard
    if (isLoading) {
        return null;
    }
    if (!condition && !devMode) {
        console.log(errorMessage)
        return <Navigate to={fallback} />
    }
    return <>{renderPage}</>
}

export default RenderProtectedRoute