import type { GetStaticProps } from "next";

import { Head } from "@/components/head";
import { Logomark } from "@/components/logomark";
import { Logotype } from "@/components/logotype";

import { getI18nProps, Locales, useI18nContext } from "@/modules/i18n";

import type { Page } from "@/types";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await getI18nProps(locale as Locales, ["home"])),
  },
});

const Home: Page = () => {
  const { LL } = useI18nContext();

  return (
    <main className="flex justify-center items-center w-full h-screen text-5xl">
      <Head title={`${LL.home.homepage()} | ${LL.app.name()}`} />
      <Logomark className="w-32 h-32" />
      <Logotype />
    </main>
  );
};

export default Home;
