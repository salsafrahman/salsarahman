import { createHashRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import ItemDetail from "./pages/ItemDetail";
import AdminAdd from "./pages/AdminAdd";
import AdminDashboard from "./pages/AdminDashboard";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "category/:type", Component: CategoryList },
      { path: "item/:id", Component: ItemDetail },
      { path: "admin", Component: AdminDashboard },
      { path: "admin/add", Component: AdminAdd },
      { path: "add", Component: AdminAdd },
      { path: "admin/edit/:id", Component: AdminAdd }
    ],
  },
]);