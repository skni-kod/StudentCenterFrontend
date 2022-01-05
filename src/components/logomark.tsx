import clsx from "clsx";

import Image, { ImageProps } from "@/components/image";

import useTranslation from "@/hooks/useTranslation";

import logomarkImage from "@/public/images/logomark.svg";

export type LogomarkProps = React.HTMLAttributes<HTMLElement> & {
  imageProps?: Omit<ImageProps, "alt" | "layout" | "objectFit" | "src">;
};

const Logomark = ({ className = "", imageProps, ...props }: LogomarkProps) => {
  const { t } = useTranslation();

  return (
    <figure className={clsx("relative", className)} {...props}>
      <Image
        alt={`${t("common:app-name")} - ${t("common:logo")}`}
        layout="fill"
        objectFit="contain"
        src={logomarkImage as StaticImageData}
        {...imageProps}
      />
    </figure>
  );
};

export default Logomark;
