import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import PageNotFound from "./PageNotFound";
export default function RouterDemo() {
  function Users() {
    const { id } = useParams();
    return <h1>{id}</h1>;
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>   |    
        <Link to="/aboutus">About Us</Link>    |    
        <Link to="/contactus">Contact Us</Link>    |    
        <Link to="/user/10">Users</Link>    |    
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/user/:id" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
