import { Stack, StackProps } from "@mui/material";
import { NavItem } from "../navitem/navitem";

export interface NavListProps extends StackProps {
  pages: { pageName: string; pageRoute: string }[];
  testid?: string;
  linkStyle?: object;
  handleLinkClick?: () => void;
}

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
