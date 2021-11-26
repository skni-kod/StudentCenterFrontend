import type { NextPage } from "next";

import Logomark from "@/components/logomark";
import Logotype from "@/components/logotype";

import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

import LayoutDefault from "@/layouts/default";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <LayoutDefault
      headProps={{ title: `${t("home:homepage")} | ${t("common:app-name")}` }}
    >
      <div className="flex justify-center items-center w-full h-screen text-5xl">
        <Logomark className="w-32 h-32" />
        <Logotype />
      </div>
    </LayoutDefault>
  );
};

export default Home;
