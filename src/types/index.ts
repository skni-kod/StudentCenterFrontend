import type { VoidFunctionComponent } from "react";

import type { NextPage } from "next";

export type Component<Props = undefined> = VoidFunctionComponent<Props>;

export type Page<
  Props = Record<string, never>,
  InitialProps = Props
> = NextPage<Props, InitialProps>;
