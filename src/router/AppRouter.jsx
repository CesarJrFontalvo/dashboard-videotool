import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import Dashboard from "../dashboard/pages/Dashboard";


export const AppRouter = () => {


    const routesConfig = createBrowserRouter([

        {
            path: "/",
            element: (
                <Dashboard />
            ),
            children: DashboardRoutes,
            errorElement: (<h1>error</h1>),
        },
        {
            path: '*',
            element: <Navigate to='/' />,
        }

    ]);

    return <RouterProvider router={routesConfig} />;
};