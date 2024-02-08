import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";


export default function Layout (){

return(
    <>

     <NavBar/>

     <Outlet/>

<Footer/>
    
    
    </>
)

}