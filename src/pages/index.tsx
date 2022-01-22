import type { NextPage } from "next";

import Logomark from "@/components/logomark";
import Logotype from "@/components/logotype";

import LayoutDefault from "@/layouts/default";

import { useTranslation } from "@/modules/i18n";

const Home: NextPage = () => {
  const { t } = useTranslation();

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
