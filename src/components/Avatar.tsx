import classNames from "classnames";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  isBig?: boolean;
}

export default function Avatar({ src, name, isBig }: Props) {
  return (
    <Image
      src={src}
      alt={`${name}'s avatar`}
      width={isBig ? 64 : 40}
      height={isBig ? 64 : 40}
      className={classNames("rounded-full", {
        "h-16 w-16": isBig,
        "h-10 w-10": !isBig,
      })}
    />
  );
}
