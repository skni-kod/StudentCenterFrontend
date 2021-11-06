import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return <div className="flex text-5xl">{t("homepage")}</div>;
};

export default Home;
