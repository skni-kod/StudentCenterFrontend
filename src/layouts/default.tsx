import React from "react";

import Head, { HeadProps } from "@/components/head";

export type LayoutDefaultProps = {
  children?: React.ReactNode;
  headProps?: HeadProps;
};

const LayoutDefault = ({ children, headProps }: LayoutDefaultProps) => (
  <>
    <Head {...headProps} />
    <main>{children}</main>
  </>
);

export default LayoutDefault;
