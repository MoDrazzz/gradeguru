"use client";

import Icon from "./Icon";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: IconVariants;
  href: string;
  children: string;
}

export default function NavItem({ icon, href, children }: Props) {
  const isActive = usePathname() === href;

  return (
    <div className="flex w-full items-center pl-9">
      <div
        className={classNames("flex w-14 items-center text-2xl", {
          "text-primary": isActive,
          "text-slate-300": !isActive,
        })}
      >
        <Icon name={icon} />
      </div>
      <Link
        href={href}
        className={classNames("w-full text-xl capitalize", {
          "text-slate-300": !isActive,
        })}
      >
        {children}
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
