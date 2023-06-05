import "./App.css";
import { Navbar, NavbarProps } from "./components/navbar/navbar";
import { Container } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { Users } from "./pages/users/users";
import { Customers } from "./pages/customers/customers";
import { UserDetail } from "./pages/users/user-detail";

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
      <Container sx={{ my: 5 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace={true} />} />
          <Route path="/users" element={<Users />}>
            <Route path="/users/:id" element={<UserDetail />} />
          </Route>
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
