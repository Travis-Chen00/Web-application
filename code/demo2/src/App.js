
import Login from './pages/Login'
import Single from './pages/customer/Single'
import Home from './pages/customer/Home'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./style.scss"
import Register from './pages/Register.jsx';
import Admin from './pages/admin/Admin'
import Pay from './pages/customer/Pay';
import Search from './pages/Search';
import Personal from './pages/customer/Personal'
import Order  from './pages/customer/Order'
// import Apply from './pages/customer/Apply';

import ProviderNavbar from './pages/provider/components/Navbar'
import ProviderProfile from './pages/provider/Personal'
import ProviderService from './pages/provider/Service'
import ProviderOrder from './pages/provider/Orders'
import ProviderReview from './pages/provider/Review'
import AddService from './pages/provider/AddService';

import AdminNavbar from './pages/admin/components/Navbar'
import AdminService from './pages/admin/Service'
import AdminComment from './pages/admin/Comments'
import AdminRequest from './pages/admin/Request'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const ProviderLayout = () => {
  return (
    <>
      <ProviderNavbar />
      <Outlet />
    </>
  );
};

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/customer",
    element: <Layout />,
    children: [
      {
        path: "/customer/",
        element: <Home />,
      },
      {
        path: "/customer/service/:id",
        element: <Single />,
      },
      {
        path: "/customer/order",
        element: <Order />,
      },
      {
        path: "/customer/personal",
        element: <Personal />,
      },
      {
        path: "/customer/service/apply/:id",
        element: <Pay />,
      },
    ],
  },
  {
    path: "/provider",
    element: <ProviderLayout />,
    children: [
      {
        path: "/provider/",
        element: <ProviderProfile />,
      },
      {
        path: "/provider/order",
        element: <ProviderOrder />,
      },
      {
        path: "/provider/add",
        element: <AddService />,
      },
      {
        path: "/provider/service",
        element: <ProviderService />,
      },
      {
        path: "/provider/review",
        element: <ProviderReview />,
      },
      // {
      //   path: "/customer/add",
      //   element: <AddService />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/",
        element: <Admin />,
      },
      {
        path: "/admin/service/",
        element: <AdminService />,
      },
      {
        path: "/admin/comment",
        element: <AdminComment />,
      },
      {
        path: "/admin/request",
        element: <AdminRequest />,
      },
    ],
  },
  {
    path: "/search",
    element: <Layout />,
    children: [
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
