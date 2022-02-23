import type { HTMLAttributes } from "react";

import clsx from "clsx";

import { Image, ImageProps } from "@/components/image";

import { useTranslation } from "@/modules/i18n";

import logomarkImage from "@/public/images/logomark.svg";

import type { Component } from "@/types";

export type LogomarkProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  imageProps?: Omit<ImageProps, "alt" | "layout" | "objectFit" | "src">;
  plain?: boolean;
};

export const Logomark: Component<LogomarkProps> = ({
  className = "",
  imageProps,
  plain = false,
  ...props
}) => {
  const { t } = useTranslation();

  return plain ? (
    <svg
      className={className}
      viewBox="0 0 12 26.957"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.355-.002 0 26.373V49.133l25.787 14.994L0 79.123V101.883l45.355-26.375V52.748L19.568 37.752l25.787-14.994V-.002z"
        transform="matrix(.26459 0 0 .26459 0 0)"
      />
    </svg>
  ) : (
    <figure className={clsx("relative", className)} {...props}>
      <Image
        alt={`${t("common:app-name")} - ${t("common:logo")}`}
        layout="fill"
        objectFit="contain"
        src={logomarkImage as StaticImageData}
        {...imageProps}
      />
    </figure>
  );
};
