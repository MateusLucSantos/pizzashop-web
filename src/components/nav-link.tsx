import { Link, LinkProps, useLocation } from "react-router";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      data-current={pathname === props.to}
      className="hover:text-foreground data-[current=true]:text-foreground text-muted-foreground flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  );
}
