"use client";

import Icon from "./Icon";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: IconVariants;
}

export default function NavItem({ name }: Props) {
  const isActive = usePathname() === `/${name}`;

  return (
    <div className="flex w-full items-center pl-9">
      <div
        className={classNames("flex w-14 items-center text-2xl", {
          "text-primary": isActive,
          "text-slate-400": !isActive,
        })}
      >
        <Icon name={name} />
      </div>
      <Link
        href={name}
        className={classNames("w-full text-xl capitalize", {
          "text-slate-400": !isActive,
        })}
      >
        {name}
      </Link>
      <span
        className={classNames({
          "block h-full w-1 rounded-l-full bg-primary": isActive,
          hidden: !isActive,
        })}
      />
    </div>
  );
}
