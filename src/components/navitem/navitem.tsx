import { styled } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";

/**
//  * @interface NavItemProps
//  * @description Props interface for the NavItem wrapper component
//  * @property {string} activeColor - Sets custom text color for active state
//  * @property {string} activeBorderBottom - Sets custom border color for active state
//  * @property {string} height - Sets height of navigation link
//  * @property {string} fontSize - Sets font size of navigation link
//  */
export interface NavItemProps extends NavLinkProps {
  activeColor?: string;
  activeBorderBottom?: string;
  height?: string;
  fontSize?: string;
}

export const NavItem = styled((props: NavItemProps) => <NavLink {...props} />)`
  color: ${(props) => (props.color ? props.color : "#fff")};
  height: ${(props) => (props.height ? props.height : "80px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  text-transform: none;
  text-decoration: none;
  border-radius: 0;
  &.active {
    color: ${(props) => (props.activeColor ? props.activeColor : "#fff")};
    border-bottom: ${(props) =>
      props.activeBorderBottom ? props.activeBorderBottom : `2px solid #fff`};
    font-weight: 900;
  }
`;