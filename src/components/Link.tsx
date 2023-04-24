"use client";

import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: Props) {
  return (
    <NextLink href={href} className="font-semibold text-primary">
      {children}
    </NextLink>
  );
}
