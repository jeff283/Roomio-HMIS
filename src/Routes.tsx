import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import StudentPortalDashboard from "./pages/StudentPortalDashboard/StudentPortalDashboard";
import StudentPortalRooms from "./pages/StudentPortalRooms/StudentPortalRooms";
import AdminPortalDashboard from "./pages/AdminPortalDashboard/AdminPortalDashboard";
import AdminPortalRooms from "./pages/AdminPortalRooms/AdminPortalRooms";
import AdminPortalStudents from "./pages/AdminPortalStudents/AdminPortalStudent";
import AdminPortalUsers from "./pages/AdminPortalUsers/AdminPortalUsers";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LogIn/Login";
import TestPage from "./pages/TestPage/TestPage";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

const Router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/test", element: <TestPage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  {
    path: "/student-portal/dashboard",
    element: <ProtectedRoutes component={<StudentPortalDashboard />} />,
  },
  {
    path: "/student-portal/rooms",
    element: <ProtectedRoutes component={<StudentPortalRooms />} />,
  },
  {
    path: "/admin-portal/dashboard",
    element: <ProtectedRoutes component={<AdminPortalDashboard />} />,
  },
  { path: "/admin-portal/rooms", element: <AdminPortalRooms /> },
  { path: "/admin-portal/students", element: <AdminPortalStudents /> },
  { path: "/admin-portal/users", element: <AdminPortalUsers /> },
]);

export default Router;
