import { lazy, Suspense, type JSX } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "../layouts/AppShell";
import { ProtectedRoute } from "./ProtectedRoute";


const HomePage = lazy(() => import("../pages/HomePage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const AdminPage = lazy(() => import("../pages/AdminPage"));
const ForbiddenPage = lazy(() => import("../pages/ForbiddenPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const withSuspense = (el: JSX.Element) => <Suspense fallback={<div className="p-4">Loading…</div>}>{el}</Suspense>;

export const router = createBrowserRouter([
    {
        element: <AppShell />,
        children: [
            { path: "/", element: withSuspense(<HomePage />) },
            { path: "/products", element: withSuspense(<ProductsPage />) },
            { path: "/sign-in", element: withSuspense(<SignInPage />) },
            { path: "/sign-up", element: withSuspense(<SignUpPage />) },

            {
                element: <ProtectedRoute />,
                children: [
                    { path: "/dashboard", element: withSuspense(<DashboardPage />) },
                ],
            },

            {
                element: <ProtectedRoute allowRoles={ ["ADMIN"] } />,
                children: [
                    { path: "/admin", element: withSuspense(<AdminPage />) },
                ],
            },

            { path: "/forbidden", element: withSuspense(<ForbiddenPage />) },
            { path: "*", element: withSuspense(<NotFoundPage />) },
        ],
    },
]);