import { Stack, StackProps } from "@mui/material";
import { NavItem } from "../navitem/navitem";

/**
 * @interface NavListProps
 * @description Props interface for the NavList component
 * @property {Array} pages - Array of objects containing pageName and pageRoute
 * @property {string} testid - Sets custom data-testid for the NavList component
 * @property {object} linkStyle - Sets custom styles for the NavItem component
 * @property {function} handleLinkClick - Sets custom function to be called on NavLink click
 */
export interface NavListProps extends StackProps {
  pages: { pageName: string; pageRoute: string }[];
  testid?: string;
  linkStyle?: object;
  handleLinkClick?: () => void;
}

/**
 * @description: NavList component is used to render the navlist and display all pages.
 * @param param0: NavListProps
 * @returns: JSX.Element
 */
export const NavList = (props: NavListProps) => {
  const { pages, testid, linkStyle, handleLinkClick, ...rest } = props;
  return (
    <Stack data-testid={testid} {...rest}>
      {pages.map((page, index) => {
        return (
          <NavItem
            key={index}
            to={page.pageRoute}
            onClick={handleLinkClick}
            {...linkStyle}
          >
            {page.pageName}
          </NavItem>
        );
      })}
    </Stack>
  );
};
