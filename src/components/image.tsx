import NextImage, { ImageProps as NextImageProps } from "next/image";

import type { Component } from "@/types";

export type ImageProps = NextImageProps;

export const Image: Component<ImageProps> = (props) => <NextImage {...props} />;
