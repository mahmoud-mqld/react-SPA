import "./App.css";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Portofolio from "./components/Portofolio/Portofolio";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Notfound from "./components/NotFound/Notfound";

function App() {
  let routes = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {path:"home",element: <Home/> },
        {index:true, element: <Home/>},
        { path: "about", element: <About /> },
        { path: "portofolio", element: <Portofolio /> },
        { path: "contact", element: <Contact /> },
        {path: '*', element: <Notfound/>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
