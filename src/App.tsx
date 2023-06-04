import "./App.css";
import { Navbar, NavbarProps } from "./components/navbar/navbar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Users } from "./pages/users/users";
import { Customers } from "./pages/customers/customers";

function App() {
  const navbarProps: NavbarProps = {
    pages: [
      {
        pageName: "Engage Users",
        pageRoute: "/users",
      },
      {
        pageName: "Engage Customers",
        pageRoute: "/customers",
      },
    ],
    logoTitle: "Engage Solutions",
  };
  return (
    <div>
      <Navbar {...navbarProps} />
      <Container sx={{ my: 4 }}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
