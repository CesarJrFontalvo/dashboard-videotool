import { Navigate } from "react-router-dom";
import { Files } from "../components/Files";
import Dashboard from "../pages/Dashboard";
import { TableHome } from "../components/TableHome";
import { PaperBin } from "../components/PaperBin";


export const DashboardRoutes = [
    {
        path: "/",
        element: <TableHome  />
    },
    {
        path: "/paper-bin",
        element: <PaperBin />
    },
    {
        path: "/file/:name",
        element: <Files />
    },
 
    {
        path: "*",
        element: <Navigate to={"/"} />,
    },
];