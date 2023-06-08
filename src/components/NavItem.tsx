"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  href: string;
  children: string;
}

export default function NavItem({ icon, href, children }: Props) {
  const isActive = usePathname() === href;

  return (
    <div className="flex w-full pl-9">
      <Link
        href={href}
        className={classNames("flex w-full text-lg capitalize", {
          "text-slate-300": !isActive,
        })}
      >
        <div
          className={classNames(
            "mr-4 flex w-8 items-center justify-center text-2xl",
            {
              "text-primary": isActive,
              "text-slate-300": !isActive,
            }
          )}
        >
          <Icon icon={icon} />
        </div>
        {children}
      </Link>
      <span
        className={classNames({
          "relative block h-full w-1 rounded-l-full bg-primary": isActive,
          hidden: !isActive,
        })}
      />
    </div>
  );
}
