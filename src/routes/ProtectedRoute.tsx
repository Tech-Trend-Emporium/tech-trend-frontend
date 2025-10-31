import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";


export const ProtectedRoute = ({ allowRoles }: { allowRoles?: string[] }) => {
    const { auth } = useAuth();

    if (!auth.isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    }

    if (allowRoles && auth.role && !allowRoles.includes(auth.role)) {
        return <Navigate to="/forbidden" replace />;
    }

    return <Outlet />;
}