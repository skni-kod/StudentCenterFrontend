import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

export type LogotypeProps = React.HTMLAttributes<HTMLSpanElement>;

const Logotype = ({ className = "", ...props }: LogotypeProps) => {
  const { t } = useTypeSafeTranslation();

  return (
    <span
      className={`font-medium font-logo select-none text-transparent bg-clip-text bg-gradient-to-r from-brand-800 via-brand-600 to-brand-400 ${className}`}
      {...props}
    >
      {t("common:app-name")}
    </span>
  );
};

export default Logotype;
