import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    children: React.ReactNode;
    className?: string;
  };

const Link = ({
  as,
  children,
  className,
  href,
  locale,
  passHref = false,
  prefetch,
  replace,
  scroll,
  shallow,
  ...props
}: LinkProps) => {
  if (
    (typeof href === "string" && href.startsWith("/")) ||
    typeof href === "object"
  ) {
    return (
      <NextLink
        as={as}
        href={href}
        locale={locale}
        passHref={passHref}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        {passHref ? children : <a className="">{children}</a>}
      </NextLink>
    );
  }

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
