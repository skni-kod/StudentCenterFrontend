import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

import "@/styles/globals.scss";

const handleExitComplete = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
};

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
