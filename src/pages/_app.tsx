import "@/styles/globals.scss";

import { ApplicationProvider } from "@/providers";
import type { Application } from "@/types";

const Application: Application = ({ Component, pageProps, router }) => (
  <ApplicationProvider pageProps={pageProps} router={router}>
    <Component {...pageProps} key={router.route} />
  </ApplicationProvider>
);

export default Application;
