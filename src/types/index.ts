import type { NextPage } from "next";

export type Page<P = Record<string, never>, IP = P> = NextPage<P, IP>;
