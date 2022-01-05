import clsx from "clsx";

import useTranslation from "@/hooks/useTranslation";

export type LogotypeProps = React.HTMLAttributes<HTMLSpanElement>;

const Logotype = ({ className = "", ...props }: LogotypeProps) => {
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

export default Logotype;
