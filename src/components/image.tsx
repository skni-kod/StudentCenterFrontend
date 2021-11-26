import NextImage, { ImageProps as NextImageProps } from "next/image";

export type ImageProps = NextImageProps;

const Image = (props: ImageProps) => <NextImage {...props} />;

export default Image;
