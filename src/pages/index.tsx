import type { NextPage } from "next";

import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

import LayoutDefault from "@/layouts/default";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <LayoutDefault
      headProps={{ title: `${t("home:homepage")} | ${t("common:app-name")}` }}
    >
      {t("home:homepage")}
    </LayoutDefault>
  );
};

export default Home;
