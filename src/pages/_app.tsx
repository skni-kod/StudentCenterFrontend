import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
