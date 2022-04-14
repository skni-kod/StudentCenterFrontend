import type { HTMLAttributes } from "react";

import clsx from "clsx";

import { useI18nContext } from "@/modules/i18n";

import type { Component } from "@/types";

export type LogotypeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export const Logotype: Component<LogotypeProps> = ({
  className = "",
  ...props
}) => {
  const { LL } = useI18nContext();

  return (
    <span
      className={clsx(
        "font-logo font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-800 via-brand-600 to-brand-400 select-none",
        className
      )}
      {...props}
    >
      {LL.app.name()}
    </span>
  );
};
