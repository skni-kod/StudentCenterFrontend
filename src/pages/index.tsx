import type { NextPage } from "next";

import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return <div className="flex text-5xl">{t("common:homepage")}</div>;
};

export default Home;
