import logo from "public/images/logo.svg";

import Image, { ImageProps } from "@/components/image";

import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

export type LogomarkProps = React.HTMLAttributes<HTMLElement> & {
  imageProps?: Omit<ImageProps, "alt" | "layout" | "objectFit" | "src">;
};

const Logomark = ({ className = "", imageProps, ...props }: LogomarkProps) => {
  const { t } = useTypeSafeTranslation();

  return (
    <figure className={`relative ${className}`} {...props}>
      <Image
        alt={`${t("common:app-name")} - ${t("common:logo")}`}
        layout="fill"
        objectFit="contain"
        src={logo as StaticImageData}
        {...imageProps}
      />
    </figure>
  );
};

export default Logomark;
