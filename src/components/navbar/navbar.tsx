import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import { NavList } from "../navlist/navlist";
import MenuIcon from "@mui/icons-material/Menu";
import PollIcon from "@mui/icons-material/Poll";
import { NavItem } from "../navitem/navitem";

export interface NavbarProps {
  pages: { pageName: string; pageRoute: string }[];
  logoTitle?: string;
  testId?: string;
}

/**
 * @description: Navbar component is used to render the navbar and display all pages.
 * @param param0: NavbarProps
 * @returns: JSX.Element
 */
export const Navbar = ({
  pages,
  logoTitle,
  testId = "primary-navbar",
}: NavbarProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={5} sx={{ position: "relative" }} data-testid={testId}>
      <Container>
        <Toolbar disableGutters>
          <PollIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {logoTitle}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.pageName} onClick={handleCloseNavMenu}>
                  <NavItem
                    to={page.pageRoute}
                    color={"black"}
                    activecolor={"black"}
                    activeborderbottom={"2px solid black"}
                    height="auto"
                  >
                    {page.pageName}
                  </NavItem>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PollIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {logoTitle}
          </Typography>
          <NavList
            pages={pages}
            direction="row"
            spacing={5}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
            linkStyle={{
              color: "#fff",
              height: "80px",
              fontSize: "16px",
              activecolor: "#fff",
              activeborderbottom: "2px solid #fff",
            }}
            handleLinkClick={handleCloseNavMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
