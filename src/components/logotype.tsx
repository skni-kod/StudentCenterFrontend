import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

export type LogotypeProps = React.HTMLAttributes<HTMLSpanElement>;

const Logotype = ({ className = "", ...props }: LogotypeProps) => {
  const { t } = useTypeSafeTranslation();

  return (
    <span
      className={`font-medium font-logo select-none text-transparent bg-clip-text bg-gradient-to-r from-logo-900 via-logo-700 to-logo-500 ${className}`}
      {...props}
    >
      {t("common:app-name")}
    </span>
  );
};

export default Logotype;
