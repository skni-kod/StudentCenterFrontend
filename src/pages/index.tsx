import { Head } from "@/components/head";
import { Logomark } from "@/components/logomark";
import { Logotype } from "@/components/logotype";

import { useTranslation } from "@/modules/i18n";

import type { Page } from "@/types";

const Home: Page = () => {
  const { t } = useTranslation();

  return (
    <main className="flex justify-center items-center w-full h-screen text-5xl">
      <Head title={`${t("home:homepage")} | ${t("common:app-name")}`} />
      <Logomark className="w-32 h-32" />
      <Logotype />
    </main>
  );
};

export default Home;
