import type { AnchorHTMLAttributes, ReactNode } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

import type { Component } from "@/types";

export type LinkProps = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    children: ReactNode;
    className?: string;
  };

export const Link: Component<LinkProps> = ({
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
}) => {
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
        {passHref ? (
          children
        ) : (
          <a className={className} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    );
  }

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
};
