import clsx from "clsx";

import { useTranslation } from "@/modules/i18n";

export type LogotypeProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: never;
};

export const Logotype = ({ className = "", ...props }: LogotypeProps) => {
  const { t } = useTranslation();

  return (
    <span
      className={clsx(
        "font-logo font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-800 via-brand-600 to-brand-400 select-none",
        className
      )}
      {...props}
    >
      {t("common:app-name")}
    </span>
  );
};
